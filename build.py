from pathlib import Path
import re,base64,mimetypes,html
root=Path(__file__).parent
text=(root/'index.html').read_text(encoding='utf-8')
css=(root/'styles.css').read_text(encoding='utf-8')
ateliercss=(root/'atelier.css').read_text(encoding='utf-8')
brandcss=(root/'brand-polish.css').read_text(encoding='utf-8')
js=(root/'app.js').read_text(encoding='utf-8')
atelierjs=(root/'atelier.js').read_text(encoding='utf-8')
import json
embedded={}
for p in list((root/'assets/icons').glob('*.svg'))+list((root/'assets/brand-logos').glob('*.svg'))+list((root/'assets/project-art').glob('*.svg')):
 rel=p.relative_to(root).as_posix()
 embedded[rel]='data:image/svg+xml;base64,'+base64.b64encode(p.read_bytes()).decode()
js=js.replace('const EMBEDDED = {};', 'const EMBEDDED = '+json.dumps(embedded,separators=(',',':'))+';')
def inline_uri(rel):
 p=root/rel
 mime=mimetypes.guess_type(str(p))[0] or 'application/octet-stream'
 return f'data:{mime};base64,'+base64.b64encode(p.read_bytes()).decode()
for rel in sorted([p.relative_to(root).as_posix() for p in (root/'assets').rglob('*') if p.is_file()], key=len,reverse=True):
 uri=inline_uri(rel)
 css=css.replace(rel,uri)
 ateliercss=ateliercss.replace(rel,uri)
 brandcss=brandcss.replace(rel,uri)
 text=text.replace(rel,uri)
text=text.replace('<link rel="stylesheet" href="styles.css">','<style>'+css+'</style>')
text=text.replace('<link rel="stylesheet" href="atelier.css">','<style>'+ateliercss+'</style>')
text=text.replace('<link rel="stylesheet" href="brand-polish.css">','<style>'+brandcss+'</style>')
text=text.replace('href="BRAND_ASSETS.md"','href="https://github.com/simple-icons/simple-icons" target="_blank" rel="noopener noreferrer"')
text=text.replace('<script defer src="app.js"></script>','')
text=text.replace('<script defer src="atelier.js"></script>','')
summary=(root/'professional-summary.html').read_bytes()
b64=base64.b64encode(summary).decode()
summaryjs=f'''
<script>
(function(){{
var encoded='{b64}';
document.addEventListener('click',function(e){{
 var a=e.target.closest('a[href="professional-summary.html"]');
 if(!a)return;
 e.preventDefault();
 var bytes=Uint8Array.from(atob(encoded),c=>c.charCodeAt(0));
 var blob=new Blob([bytes],{{type:'text/html;charset=utf-8'}});
 var url=URL.createObjectURL(blob);
 var w=window.open(url,'_blank');
 if(!w){{a.textContent=(a.textContent||'')+' (Open in a desktop browser)'}}
 setTimeout(()=>URL.revokeObjectURL(url),60000);
 }});
}})();
</script>
'''
text=text.replace('</body>','<script>'+js+'</script><script>'+atelierjs+'</script>'+summaryjs+'</body>')
(root/'MUATH_Atelier_Standalone.html').write_text(text,encoding='utf-8')
print('standalone',round(len(text.encode())/1024),'KiB')
