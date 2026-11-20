"""Build the optional standalone HTML or stage the GitHub Pages site."""
import argparse
import base64
import json
import mimetypes
from pathlib import Path
import re
import shutil

ROOT = Path(__file__).resolve().parent
STYLES = ("styles.css", "atelier.css", "brand-polish.css")
SCRIPTS = ("app.js", "atelier.js")
PAGES = ("index.html", "professional-summary.html", *STYLES, *SCRIPTS)


def source(name):
    return (ROOT / name).read_text(encoding="utf-8")


def asset_uri(path):
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{encoded}"


def replace_assets(markup, assets):
    return re.sub(r'(?<![/\w])assets/[\w./-]+', lambda m: assets.get(m[0], m[0]), markup)


def build_standalone(output):
    assets = {
        path.relative_to(ROOT).as_posix(): asset_uri(path)
        for path in sorted((ROOT / "assets").rglob("*")) if path.is_file()
    }
    document = replace_assets(source("index.html"), assets)
    for name in STYLES:
        css = replace_assets(source(name), assets)
        document = re.sub(
            r'<link\s+rel="stylesheet"\s+href="' + re.escape(name) + r'"\s*/?>',
            lambda _: f"<style>\n{css}\n</style>", document,
        )
    for name in SCRIPTS:
        document = re.sub(
            r'<script\s+defer\s+src="' + re.escape(name) + r'"\s*>\s*</script>',
            "", document,
        )
    brand = "https://github.com/simple-icons/simple-icons"
    document = document.replace('href="BRAND_ASSETS.md"', f'href="{brand}"')
    summary = replace_assets(source("professional-summary.html"), assets)
    summary = re.sub(r'<a\s+href="index\.html"\s*>[^<]*</a\s*>', "", summary)
    summary_url = "data:text/html;charset=utf-8;base64," + base64.b64encode(summary.encode()).decode()
    app = source("app.js")
    vectors = {name: uri for name, uri in assets.items() if name.endswith(".svg") and name.count("/") == 2}
    app = app.replace("const EMBEDDED = {};", f"const EMBEDDED = {json.dumps(vectors)};", 1)
    summary_script = f"""
document.querySelectorAll('a[href="professional-summary.html"]').forEach(link => {{
 link.addEventListener('click', event => {{
  event.preventDefault();
  const encoded = {json.dumps(summary_url)}.split(',')[1];
  const bytes = Uint8Array.from(atob(encoded), character => character.charCodeAt(0));
  const preview = URL.createObjectURL(new Blob([bytes], {{type:'text/html;charset=utf-8'}}));
  window.open(preview, '_blank', 'noopener');
  setTimeout(() => URL.revokeObjectURL(preview), 60000);
 }});
}});
"""
    scripts = "\n".join(f"<script>\n{script}\n</script>" for script in (app, source("atelier.js"), summary_script))
    license_files = sorted((ROOT / "assets").rglob("*.txt"))
    notices = "\n\n".join(f"{path.name}\n{path.read_text(encoding='utf-8')}" for path in license_files)
    document = document.replace("</body>", scripts + "\n<!-- Third-party notices\n" + notices + "\n-->\n</body>", 1)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(document, encoding="utf-8")
    print(f"{output} ({output.stat().st_size:,} bytes)")


def stage_pages(output):
    output.mkdir(parents=True, exist_ok=True)
    if any(output.iterdir()):
        raise ValueError(f"Choose an empty staging directory: {output}")
    for name in PAGES:
        shutil.copy2(ROOT / name, output / name)
    shutil.copytree(ROOT / "assets", output / "assets")
    # The attribution link in the interface points to a browsable local page.
    (output / "BRAND_ASSETS.md").write_text(source("BRAND_ASSETS.md"), encoding="utf-8")
    (output / ".nojekyll").touch()
    print(f"GitHub Pages files staged in {output}")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--standalone", type=Path, default=ROOT / "dist" / "MUATH_Atelier_Standalone.html")
    parser.add_argument("--pages", type=Path, help="stage editable site files in an empty directory")
    args = parser.parse_args()
    if args.pages:
        stage_pages(args.pages)
    else:
        build_standalone(args.standalone)


if __name__ == "__main__":
    main()
