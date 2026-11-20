/* CHAPTER 08 — real interaction studies, not screenshots of imaginary systems. */
"use strict";
(function () {
  const root = document.documentElement;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [
    ...scope.querySelectorAll(selector),
  ];
  const lex = {
    ar: {
      navEvidence: "المختبر",
      sceneProofTitle: "واجهات، تكامل، ومراقبة",
      sceneProofBody: "Numoo: واجهات + Flask · الأرصاد: المراقبة والسجلات",
      sceneProofLink: "شاهد الأعمال المختارة ↗",
      evidenceTitle: "مختبر التكامل والمراقبة",
      labTabObserve: "المراقبة",
      labTabIntegrate: "التكامل",
      evidenceIntro:
        "تجربتان تفاعليتان توضيحيتان: كيف يمر الطلب بين الواجهة وFlask، وكيف تُقرأ مؤشرات المراقبة. لا تتضمن هذه التجارب بيانات تشغيل حقيقية أو نتائج نماذج.",
      proofHeadline: "داخل النظام",
      labSimBadge: "محاكاة توضيحية / ليست بيانات مباشرة",
      labObserveTitle: "ماذا لو تغيّرت حالة النظام؟",
      labObserveDesc:
        "اختر سيناريو لتتغير الإشارة وسجل الأحداث توضيحيًا. الفكرة: المقاييس تبيّن التغيّر، والسجلات توفر السياق، واللوحات تجعل المعلومة مرئية.",
      labObserveLesson:
        "استُخدمت مفاهيم المراقبة خلال تدريب الأرصاد، لكن البيانات المعروضة هنا مصطنعة لشرح الفكرة فقط.",
      labIntegrateTitle: "كيف تتصل الواجهة بوظيفة ذكية؟",
      labIntegrateDesc:
        "استكشف ثلاث خطوات توضيحية: طلب من الواجهة، معالجة عبر Flask، ثم إعادة المخرجات للواجهة. في Numoo كان دوري في الواجهة والتكامل؛ نماذج الفريق لم أقم بتدريبها.",
      labIntegrateLesson:
        "هذا المسار يمثل نوع المساهمة في المشروع، وليس نموذجًا إنتاجيًا منشورًا أو دليلاً على تدريب النموذج.",
      labLessonLabel: "ما الذي يمثله هذا المثال؟",
      labCaseLink: "شاهد دراسات الحالة ↗",
      signalSteady: "حالة مستقرة",
      signalSurge: "ارتفاع الحمل",
      signalRecover: "استعادة",
      metricSignal: "حالة المؤشر",
      metricAction: "سياق السجل",
      metricSource: "مصدر الرسم",
      evidenceDisclaimer:
        "المخططات والسجلات هنا تعليمية مصطنعة بالكامل؛ ليست قياسات المركز الوطني للأرصاد أو نتائج حقيقية لنموذج Numoo.",
      paletteTitle: "البحث والتنقل السريع",
      palettePlaceholder: "ابحث عن قسم أو مشروع...",
      paletteHint: "↑↓ للتنقل · Enter للفتح · Esc للإغلاق",
      controls: {
        observe: ["مستقر", "حمل مرتفع", "تعافٍ"],
        integrate: ["الواجهة", "Flask", "الاستجابة"],
      },
      states: {
        observe: {
          steady: {
            signal: "STABLE",
            action: "NO ALERT",
            source: "SAMPLE",
            lines: [
              "› example metric · nominal trend",
              "› dashboard · normal visualization",
              "› example logs · no alert",
            ],
          },
          surge: {
            signal: "ELEVATED",
            action: "INVESTIGATE",
            source: "SAMPLE",
            lines: [
              "› example metric · sudden increase",
              "› dashboard · attention highlighted",
              "› example logs · investigate context",
            ],
          },
          recover: {
            signal: "RECOVERING",
            action: "REVIEW",
            source: "SAMPLE",
            lines: [
              "› example metric · moving toward baseline",
              "› dashboard · trend improving",
              "› example logs · recovery context",
            ],
          },
        },
        integrate: {
          steady: {
            signal: "INPUT",
            action: "UI EVENT",
            source: "CONCEPT",
            lines: [
              "› user submits example input",
              "› UI validates request shape",
              "› request prepared for service",
            ],
          },
          surge: {
            signal: "API",
            action: "FLASK",
            source: "CONCEPT",
            lines: [
              "› Flask receives example request",
              "› service invokes team component",
              "› result passed to response layer",
            ],
          },
          recover: {
            signal: "OUTPUT",
            action: "UI UPDATE",
            source: "CONCEPT",
            lines: [
              "› response arrives at interface",
              "› UI presents example output",
              "› no model inference executed here",
            ],
          },
        },
      },
      cmd: [
        ["الرئيسية", "قسم"],
        ["الأعمال", "قسم"],
        ["المختبر التفاعلي", "تجربة"],
        ["أطلس المشاريع", "قسم"],
        ["المهارات", "قسم"],
        ["عني", "قسم"],
        ["المحطات", "قسم"],
        ["تواصل", "قسم"],
        ["المنهج", "قسم"],
      ],
    },
    en: {
      navEvidence: "Lab",
      sceneProofTitle: "Interfaces, integration, and observability",
      sceneProofBody: "Numoo: UI + Flask · NCM: monitoring and logs",
      sceneProofLink: "See selected work ↗",
      evidenceTitle: "Integration and observability lab",
      labTabObserve: "Observability",
      labTabIntegrate: "Flask integration",
      evidenceIntro:
        "Two illustrative interactive studies: how an interface communicates through Flask, and how a monitoring signal can be interpreted. No real operational telemetry or model results are used.",
      proofHeadline: "Inside the system.",
      labSimBadge: "ILLUSTRATIVE SIMULATION / NOT LIVE DATA",
      labObserveTitle: "What if the system state changes?",
      labObserveDesc:
        "Choose a scenario to alter the sample signal and event trace. Metrics reveal change, logs provide context, and dashboards make trends visible.",
      labObserveLesson:
        "Observability concepts were part of my NCM internship, but every signal shown here is synthetic and explanatory.",
      labIntegrateTitle: "How does an interface connect to intelligence?",
      labIntegrateDesc:
        "Follow a sample UI request, a Flask integration step, and an interface response. In Numoo my responsibility was UI and integration; I did not train the team’s models.",
      labIntegrateLesson:
        "This describes my type of contribution—not a public production API or evidence that I trained models.",
      labLessonLabel: "What does this demo represent?",
      labCaseLink: "Explore the case studies ↗",
      signalSteady: "Steady",
      signalSurge: "High load",
      signalRecover: "Recovery",
      metricSignal: "Signal state",
      metricAction: "Log context",
      metricSource: "Data origin",
      evidenceDisclaimer:
        "All charts and logs are synthetic educational examples. They are not NCM measurements or Numoo model outputs.",
      paletteTitle: "Quick search",
      palettePlaceholder: "Search a section or project...",
      paletteHint: "↑↓ navigate · Enter open · Esc close",
      controls: {
        observe: ["Steady", "High load", "Recovery"],
        integrate: ["Interface", "Flask", "Response"],
      },
      states: {
        observe: {
          steady: {
            signal: "STABLE",
            action: "NO ALERT",
            source: "SAMPLE",
            lines: [
              "› sample metric · nominal trend",
              "› sample dashboard · normal visualization",
              "› sample logs · no alert",
            ],
          },
          surge: {
            signal: "ELEVATED",
            action: "INVESTIGATE",
            source: "SAMPLE",
            lines: [
              "› sample metric · sudden increase",
              "› sample dashboard · attention highlighted",
              "› sample logs · investigate context",
            ],
          },
          recover: {
            signal: "RECOVERING",
            action: "REVIEW",
            source: "SAMPLE",
            lines: [
              "› sample metric · moving toward baseline",
              "› sample dashboard · trend improving",
              "› sample logs · recovery context",
            ],
          },
        },
        integrate: {
          steady: {
            signal: "INPUT",
            action: "UI EVENT",
            source: "CONCEPT",
            lines: [
              "› user submits example input",
              "› UI validates request shape",
              "› request prepared for service",
            ],
          },
          surge: {
            signal: "API",
            action: "FLASK",
            source: "CONCEPT",
            lines: [
              "› Flask receives sample request",
              "› service invokes team component",
              "› result passed to response layer",
            ],
          },
          recover: {
            signal: "OUTPUT",
            action: "UI UPDATE",
            source: "CONCEPT",
            lines: [
              "› response arrives at interface",
              "› UI presents example output",
              "› no model inference executed here",
            ],
          },
        },
      },
      cmd: [
        ["Home", "SECTION"],
        ["Selected work", "SECTION"],
        ["Interactive lab", "DEMO"],
        ["Project atlas", "SECTION"],
        ["Skills", "SECTION"],
        ["About", "SECTION"],
        ["Journey", "SECTION"],
        ["Contact", "SECTION"],
        ["Approach", "Section"],
      ],
    },
  };
  const navIds = [
    "home",
    "work",
    "evidence",
    "atlas",
    "skills",
    "about",
    "journey",
    "contact",
    "approach",
  ];
  const modeState = { mode: "observe", signal: "steady" };
  const paths = {
    observe: {
      steady: [126, 121, 125, 112, 117, 103, 109, 93, 101, 89, 94, 79, 85],
      surge: [134, 128, 113, 111, 82, 89, 49, 67, 34, 25, 42, 20, 14],
      recover: [32, 26, 36, 53, 57, 67, 65, 80, 78, 91, 88, 94, 86],
    },
    integrate: {
      steady: [120, 120, 120, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88],
      surge: [88, 88, 88, 88, 88, 46, 46, 46, 46, 46, 46, 46, 46],
      recover: [46, 46, 46, 46, 46, 46, 46, 46, 46, 93, 93, 93, 93],
    },
  };
  function language() {
    return root.dataset.lang === "en" ? "en" : "ar";
  }
  function scenePixelTransition(scene, mode) {
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !Element.prototype.animate
    )
      return;
    scene
      .querySelectorAll(".scene-fragment")
      .forEach((fragment) =>
        fragment.getAnimations().forEach((animation) => animation.cancel()),
      );

    const palette = { real: "#f4ba9b", pixel: "#cbb0f7", proof: "#a8dfcf" };
    const color = palette[mode];
    for (let index = 0; index < 18; index++) {
      const column = index % 6;
      const row = Math.floor(index / 6);
      const cell = document.createElement("span");
      cell.className = "scene-fragment";
      cell.setAttribute("aria-hidden", "true");
      cell.style.inset =
        37 + row * 12 + "% auto auto " + (21 + column * 10) + "%";
      cell.style.width = cell.style.height = (index % 3 === 0 ? 19 : 11) + "px";
      cell.style.background = color;
      scene.append(cell);

      const direction = mode === "real" ? -1 : 1;
      const horizontal = direction * (28 + column * 9);
      const vertical = (row - 1) * 21;
      const animation = cell.animate(
        [
          { opacity: 0, transform: "scale(0.2)" },
          { opacity: 0.78, transform: "scale(1)", offset: 0.28 },
          {
            opacity: 0,
            transform:
              "translate(" + horizontal + "px," + vertical + "px) scale(0.35)",
          },
        ],
        {
          duration: 460,
          delay: column * 29 + row * 19,
          easing: "cubic-bezier(.2,.75,.24,1)",
          fill: "both",
        },
      );
      animation.onfinish = animation.oncancel = () => cell.remove();
    }
  }
  function changeScene(mode) {
    const scene = $("#heroScene");
    if (!scene) return;
    if (scene.dataset.view !== mode) scenePixelTransition(scene, mode);
    scene.dataset.view = mode;
    $(".scene-portrait-real", scene).hidden = mode !== "real";
    for (const name of ["real", "proof"]) {
      const panel = $(".scene-" + name, scene);
      panel.inert = name !== mode;
      panel.setAttribute("aria-hidden", String(name !== mode));
    }
    $$(".scene-switch button", scene).forEach((btn) => {
      const active = btn.dataset.view === mode;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }
  let graphAnimation;
  function setDemo(mode, signal, animateUpdate = false) {
    if (!lex[language()]) return;
    modeState.mode = mode;
    modeState.signal = signal;
    const l = lex[language()];
    const isObserve = mode === "observe";
    const lab = $("#proofLab");
    if (!lab) return;
    lab.dataset.lab = mode;
    lab.dataset.signal = signal;
    $$(".proof-lab-tabs button").forEach((b) => {
      const active = b.dataset.labMode === mode;
      b.classList.toggle("active", active);
      b.setAttribute("aria-selected", String(active));
      b.tabIndex = active ? 0 : -1;
    });
    $("#labPanel").setAttribute("aria-labelledby", "lab-" + mode);
    const title = $("#labTitle"),
      desc = $("#labDescription"),
      lesson = $("#labLesson");
    title.textContent = isObserve ? l.labObserveTitle : l.labIntegrateTitle;
    desc.textContent = isObserve ? l.labObserveDesc : l.labIntegrateDesc;
    lesson.textContent = isObserve ? l.labObserveLesson : l.labIntegrateLesson;
    const controls = $$(".scenario-controls button");
    controls.forEach((b, i) => {
      const active = b.dataset.signal === signal;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", String(active));
      b.textContent = l.controls[mode][i];
    });
    $("#consoleLabel").textContent = isObserve
      ? "OBSERVABILITY / SYNTHETIC"
      : "FLASK INTEGRATION / CONCEPT";
    const state = l.states[mode][signal];
    $("#metricSignal").textContent = state.signal;
    $("#metricAction").textContent = state.action;
    $("#metricSource").textContent = state.source;
    const log = $("#consoleLog");
    log.replaceChildren();
    state.lines.forEach((line, i) => {
      if (i) log.appendChild(document.createElement("br"));
      log.append(document.createTextNode(line));
    });
    const vals = paths[mode][signal];
    let d = "";
    vals.forEach((y, i) => (d += `${i ? " L" : "M"}${i * 45} ${y}`));
    const p = $("#consolePath");
    p.setAttribute("d", d);
    const area = $("#consoleArea");
    area.setAttribute("d", `${d} L540 170 L0 170 Z`);
    graphAnimation?.cancel();
    if (
      animateUpdate &&
      typeof p.animate === "function" &&
      !matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !root.classList.contains("motion-off")
    ) {
      graphAnimation = p.animate(
        [{ strokeDashoffset: 840 }, { strokeDashoffset: 0 }],
        { duration: 460, easing: "cubic-bezier(.2,.75,.24,1)" },
      );
    }
  }
  const projects = [];
  document.dispatchEvent(
    new CustomEvent("portfolio:command-projects", { detail: projects }),
  );
  const commands = [
    ...navIds.map((id, index) => ({ type: "nav", id, index })),
    ...projects,
  ];
  let filteredCommands = commands;
  let selected = 0;
  let lastFocus = null;

  function commandLabel(command, locale) {
    if (command.type === "nav") return lex[locale].cmd[command.index][0];
    return command.title[locale === "ar" ? 0 : 1];
  }

  function searchKey(text) {
    return text
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
      .trim();
  }

  function renderCommands(query = "") {
    const locale = language();
    const term = searchKey(query);
    filteredCommands = commands.filter((command) =>
      [
        commandLabel(command, "ar"),
        commandLabel(command, "en"),
        command.id,
        ...(command.aliases || []),
      ].some((value) => searchKey(value).includes(term)),
    );
    selected = Math.min(selected, Math.max(0, filteredCommands.length - 1));

    const results = $("#commandResults");
    results.replaceChildren();
    for (const [index, command] of filteredCommands.entries()) {
      const option = document.createElement("div");
      option.className = "command-result";
      option.id = "command-option-" + index;
      option.setAttribute("role", "option");
      const label = document.createElement("span");
      label.textContent = commandLabel(command, locale);
      const hint = document.createElement("small");
      hint.textContent =
        command.type === "nav"
          ? lex[locale].cmd[command.index][1]
          : locale === "ar"
            ? "مشروع"
            : "Project";
      option.append(label, hint);
      option.addEventListener("click", () => activateCommand(command));
      results.append(option);
    }
    const count = filteredCommands.length;
    $("#commandStatus").textContent = count
      ? locale === "ar"
        ? "عدد النتائج: " + count
        : count + (count === 1 ? " result" : " results")
      : locale === "ar"
        ? "لا توجد نتائج. جرّب اسم مشروع أو قسم."
        : "No matches. Try a project or section name.";
    highlightCommand();
  }

  function highlightCommand() {
    const options = $$(".command-result");
    options.forEach((option, index) => {
      const active = index === selected;
      option.classList.toggle("is-selected", active);
      option.setAttribute("aria-selected", String(active));
    });
    const input = $("#commandQuery");
    const current = options[selected];
    input.setAttribute("aria-expanded", String(Boolean(current)));
    if (current) input.setAttribute("aria-activedescendant", current.id);
    else input.removeAttribute("aria-activedescendant");
  }

  function activateCommand(command) {
    const origin = lastFocus;
    lastFocus = null;
    $("#commandPalette").close();
    if (command.type === "case") {
      document.dispatchEvent(
        new CustomEvent("portfolio:case", {
          detail: { id: command.id, opener: origin },
        }),
      );
      return;
    }
    const target = document.getElementById(command.id);
    if (!target) return;
    location.hash = target.id;
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: "start" });
  }

  function openPalette() {
    const dialog = $("#commandPalette");
    if (dialog.open || document.querySelector("dialog[open]")) return;
    lastFocus = document.activeElement;
    const query = $("#commandQuery");
    query.value = "";
    selected = 0;
    renderCommands();
    dialog.showModal();
    query.focus();
  }

  function closePalette() {
    const dialog = $("#commandPalette");
    if (dialog.open) dialog.close();
  }
  function updateTranslations() {
    renderTrace();
    const l = lex[language()];
    $("#commandQuery")?.setAttribute(
      "aria-label",
      language() === "ar"
        ? "ابحث في الأقسام والمشاريع"
        : "Search sections and projects",
    );
    $("#commandLaunch")?.setAttribute(
      "aria-label",
      language() === "ar" ? "فتح التنقل السريع" : "Open quick navigation",
    );
    $("#commandClose")?.setAttribute(
      "aria-label",
      language() === "ar" ? "إغلاق التنقل السريع" : "Close quick navigation",
    );
    $$("[data-at]").forEach((el) => {
      if (l[el.dataset.at] !== undefined) el.textContent = l[el.dataset.at];
    });
    $$("[data-at-html]").forEach((el) => {
      if (l[el.dataset.atHtml] !== undefined)
        el.innerHTML = l[el.dataset.atHtml];
    });
    $$("[data-at-placeholder]").forEach((el) => {
      if (l[el.dataset.atPlaceholder] !== undefined)
        el.placeholder = l[el.dataset.atPlaceholder];
    });
    setDemo(modeState.mode, modeState.signal);
    if ($("#commandPalette")?.open) renderCommands($("#commandQuery").value);
  }
  const traceSteps = [
    {
      wire: "UI  →  Flask  →  UI",
      ar: ["تتبّع طلبًا بأسعار افتراضية وشاهد ما تعيده الواجهة.", "جرّب التكامل"],
      en: ["Follow one request with fictional prices through to the interface.", "Try the integration"],
    },
    {
      wire: 'input = [100, 102, 101]',
      ar: ["١ من ٣ · الواجهة التي بنيتها تجمع المدخلات. نستخدم هنا ثلاثة أسعار افتراضية.", "أرسل إلى Flask"],
      en: ["1 of 3 · The interface I built collects the input. This example uses three fictional prices.", "Send to Flask"],
    },
    {
      wire: 'request = { "prices": [100, 102, 101] }',
      ar: ["٢ من ٣ · دوري في التكامل هو تمرير مدخلات الواجهة إلى نموذج الفريق عبر Flask.", "اعرض النتيجة"],
      en: ["2 of 3 · My integration work connects the interface inputs to the team’s model through Flask.", "Show the result"],
    },
    {
      wire: 'response = { "direction": "up" }',
      ar: ["٣ من ٣ · تعرض الواجهة «صعود». هذه استجابة ثابتة للمثال. نماذج المشروع طوّرها زملائي.", "أعد التجربة"],
      en: ["3 of 3 · The interface displays “up”. This sample response is fixed. My teammates developed the project models.", "Replay"],
    },
  ];
  let traceStep = 0;
  function renderTrace() {
    const trace = $("#numoo-trace");
    const step = traceSteps[traceStep];
    const [description, action] = step[language()];
    $("#traceWire").textContent = step.wire;
    $("#traceStatus").textContent = description;
    $("#traceNext").textContent = action;
    $$("li", trace).forEach((row, index) => {
      if (index + 1 === traceStep) row.setAttribute("aria-current", "step");
      else row.removeAttribute("aria-current");
    });
  }
  function init() {
    $(".trace-console").hidden = false;
    $("#traceNext").addEventListener("click", () => {
      traceStep = traceStep === 3 ? 1 : traceStep + 1;
      renderTrace();
    });
    document.addEventListener("portfolio:lab", (event) =>
      setDemo(event.detail, "steady"),
    );
    const openLinkedDemo = () => {
      const mode = location.hash.match(/^#lab-(observe|integrate)$/)?.[1];
      if (mode) setDemo(mode, "steady");
    };
    addEventListener("hashchange", openLinkedDemo);
    if (/Mac|iPhone|iPad/.test(navigator.platform))
      $(".command-shortcut").textContent = "⌘ K";
    const scene = $("#heroScene");
    if (scene && !scene.dataset.view) scene.dataset.view = "pixel";
    $$(".scene-switch button").forEach((btn) =>
      btn.addEventListener("click", () => changeScene(btn.dataset.view)),
    );
    $$(".proof-lab-tabs button").forEach((btn, index, all) => {
      btn.addEventListener("click", () =>
        setDemo(btn.dataset.labMode, "steady", true),
      );
      btn.addEventListener("keydown", (e) => {
        if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
          e.preventDefault();
          const shift =
            (e.key === "ArrowRight" ? 1 : -1) * (language() === "ar" ? -1 : 1);
          const next =
            e.key === "Home"
              ? all[0]
              : e.key === "End"
                ? all.at(-1)
                : all[(index + shift + all.length) % all.length];
          setDemo(next.dataset.labMode, "steady", true);
          next.focus();
        }
      });
    });
    $$(".scenario-controls button").forEach((btn) =>
      btn.addEventListener("click", () =>
        setDemo(modeState.mode, btn.dataset.signal, true),
      ),
    );
    const palette = $("#commandPalette");
    $("#commandLaunch")?.addEventListener("click", openPalette);
    $("#commandClose")?.addEventListener("click", closePalette);
    $("#commandQuery")?.addEventListener("input", (e) => {
      selected = 0;
      renderCommands(e.target.value);
    });
    $("#commandQuery")?.addEventListener("keydown", (e) => {
      if (!filteredCommands.length) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        selected =
          (selected +
            (e.key === "ArrowDown" ? 1 : -1) +
            filteredCommands.length) %
          filteredCommands.length;
        highlightCommand();
        $$(".command-result")[selected]?.scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter") {
        e.preventDefault();
        activateCommand(filteredCommands[selected]);
      }
    });
    palette?.addEventListener("click", (e) => {
      if (e.target === palette) closePalette();
    });
    palette?.addEventListener("close", () => {
      const query = $("#commandQuery");
      query.setAttribute("aria-expanded", "false");
      query.removeAttribute("aria-activedescendant");
      if (!document.querySelector("dialog[open]")) lastFocus?.focus();
      lastFocus = null;
    });
    document.addEventListener("keydown", (e) => {
      if (
        !e.repeat &&
        !e.isComposing &&
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();
        palette?.open ? closePalette() : openPalette();
      }
    });
    new MutationObserver((mutations) => {
      if (mutations.some((m) => m.attributeName === "data-lang"))
        updateTranslations();
    }).observe(root, { attributes: true, attributeFilter: ["data-lang"] });
    updateTranslations();
    openLinkedDemo();
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
