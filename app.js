/* MUATH — Signature Edition. All project status labels reflect context as of Nov 2026.
   No invented benchmarks, deployments, training ownership, or employer claims. */
"use strict";
const get = (id) => document.getElementById(id);
const EMBEDDED = {}; // Replaced only inside the standalone build; source edition uses actual asset files.
const assetPath = (path) => EMBEDDED[path] || path;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const translations = {
  ar: {
    sceneReal: "الواقع",
    scenePixel: "البكسل",
    sceneProof: "الأعمال",
    numooContext: "مشروع تخرج جماعي · 2026",
    ncmContext: "تدريب تعاوني · 2025",
    pathyContext: "موقع منشور · 2026",
    flowCaption: "مسار التكامل · رسم توضيحي",
    flowLabel: "مسار التكامل",
    flowInterface: "واجهة التطبيق",
    flowInput: "استقبال المدخلات",
    flowService: "ربط الطلب بالمخرجات",
    flowModel: "نماذج الفريق",
    flowOutput: "إعادة النتيجة للعرض",
    caseDemo: "جرّب الشرح التفاعلي ↗",
    copyCase: "نسخ رابط الدراسة",
    caseCopied: "تم نسخ رابط الدراسة.",
    caseCopyManual: "الرابط محدّد، انسخه من الحقل.",
    caseUrlLabel: "رابط الدراسة",
    skillLearning: "تعلّم",
    skillTool: "أداة",
    skillPractice: "ممارسة",
    navLabel: "التنقل الرئيسي",
    mobileNavLabel: "التنقل على الجوال",
    skipLink: "تجاوز إلى المحتوى",
    journeyLabel: "المحطات المهنية",
    sceneLabel: "صورة معاذ بنظارة الواقع الافتراضي وشخصيته البكسلية",
    sceneControls: "طبقات المشهد",
    realSceneTitle: "مكة المكرمة",
    realSceneLink: "تعرّف عليّ ↗",
    labTabs: "تجارب المختبر",
    atlasLink: "استكشف أطلس المشاريع ↗",
    searchResults: "نتائج البحث",
    portraitAlt: "معاذ يرتدي نظارة الواقع الافتراضي ويحمل وحدات التحكم",
    pixelAlt: "شخصية بكسلية لمعاذ أمام الحاسوب",
    meetingAlt: "معاذ السلمي في اجتماع",
    numooAlt: "رسم توضيحي لواجهة Numoo",
    ncmAlt: "رسم توضيحي لمقاييس المراقبة",
    pathyAlt: "رسم توضيحي لفروع Git",
    modalObjectiveLabel: "المشكلة والهدف",
    modalNextLabel: "خطوة تالية ممكنة",

    brandArabic: "معاذ السلمي",
    navHome: "الرئيسية",
    navWork: "الأعمال",
    navApproach: "المنهج",
    navSkills: "المهارات",
    navAbout: "عني",
    navContact: "تواصل",
    heroEyebrow: "من مكة، إلى العالم الرقمي",
    heroName: "معاذ السلمي",
    heroRole: "تطوير البرمجيات · تكامل الذكاء الاصطناعي",
    heroLead:
      "أطوّر واجهات الويب وأربطها بنماذج الذكاء الاصطناعي. تعلّمت مراقبة الأنظمة عمليًا خلال تدريبي في المركز الوطني للأرصاد.",
    viewWork: "استكشف أعمالي",
    professionalSummary: "ملخصي المهني",
    location: "مكة المكرمة، السعودية",
    railOne: "بكالوريوس الذكاء الاصطناعي",
    railOneSub: "جامعة أم القرى · 2026 · 3.54/4",
    railTwo: "تجربة عملية في المراقبة",
    railTwoSub: "المركز الوطني للأرصاد · 2025",
    railThree: "مشاريع وتكامل برمجي",
    railThreeSub: "Numoo · Flask · GitHub",
    featuredTitle: "أعمال مختارة",
    featuredIntro:
      "مشروع تخرج جماعي، وتدريب في مراقبة الأنظمة، وموقع تعليمي منشور.",
    visualConcept: "تمثيل بصري توضيحي",
    statusCompleted: "مكتمل",
    statusPublished: "منشور",
    numooFeatured:
      "مشروع تخرج جماعي للتنبؤ باتجاه الأسهم. دوري: تطوير الواجهات وربطها عبر Flask بنماذج طوّرها الفريق.",
    ncmTitle: "مراقبة الأنظمة",
    ncmFeatured:
      "أعمال تدريبية داخل تقنية المعلومات باستخدام Docker وPrometheus وGrafana وLoki.",
    pathyFeatured:
      "موقع تعليمي منشور على GitHub Pages مع اهتمام بالتجاوب والأداء وإمكانية الوصول.",
    openCase: "افتح دراسة الحالة",
    atlasTitle: "أطلس المشاريع",
    atlasIntro: "تجارب ومشاريع قيد التطوير وأبحاث في مراحلها الأولى.",
    atlasCountLabel: "مشروعًا وتجربة وفكرة",
    filterAll: "الكل",
    filterDone: "منجز",
    filterActive: "جارٍ",
    filterConcept: "بحث / فكرة",
    filterPaused: "متوقف",
    atlasFootnote:
      "الحالة تعكس آخر ما وثقته من أعمالي. لا تعني كلمة «بحث» أن النظام قد نُفذ أو اختُبر ميدانيًا.",
    methodTitle: "أبني. أربط. <em>أراقب.</em>",
    methodIntro: "كيف أتعامل مع الواجهات والتكامل والمراقبة عبر مشاريعي.",
    tabBuild: "أبني",
    tabIntegrate: "أربط",
    tabObserve: "أراقب",
    methodDisclaimer: "مخطط توضيحي، وليس بيانات تشغيل مباشرة.",
    skillsTitle: "الأدوات في سياق العمل",
    skillsIntro: "أين استخدمت كل أداة، وما الذي أتعلمه الآن.",
    skillsGroupOne: "التطوير والتكامل",
    skillsGroupTwo: "المراقبة والبنية التشغيلية",
    skillsGroupThree: "الأدوات والمنهجيات والتجارب",
    brandNote:
      "شعارات الشركات المعروضة للتعرّف على أدواتها فقط؛ المهارات العامة لها رسوم توضيحية مستقلة.",
    brandSources: "المصادر والتراخيص ↗",
    aboutTitle: "من مكة إلى تطوير البرمجيات",
    aboutBody:
      "أنا خريج الذكاء الاصطناعي من جامعة أم القرى، شغوف ببناء البرمجيات واستكشاف ما يجعل النظام مفيدًا وموثوقًا. ساهمت في واجهات مشروع Numoo وتكامل Flask، وخضت تدريبًا عمليًا في تقنيات مراقبة الأنظمة بالمركز الوطني للأرصاد. وأحوّل الأفكار البحثية إلى خطط وتجارب يمكن اختبارها بدل الاكتفاء بوصفها.",
    factGrad: "التخرج · مرتبة الشرف الثانية",
    factGpa: "المعدل الجامعي",
    factNcm: "تدريب الأرصاد · أبريل–يوليو",
    viewSnapshot: "الملخص المهني القابل للطباعة",
    journeyTitle: "الدراسة والتدريب والمشاريع",
    journeyIntro: "محطات من جامعة أم القرى إلى المشاريع والتجارب الحالية.",
    contactTitle: "لنتواصل",
    contactBody:
      "مهتم بالتعاون في تطوير البرمجيات وتكامل الذكاء الاصطناعي، وأرحب بالفرص المهنية والنقاشات التي تحوّل الأفكار إلى أعمال قابلة للاختبار.",
    contactLinkedin: "تواصل معي عبر LinkedIn",
    backToTop: "العودة للأعلى ↑",
    modalRoleLabel: "مساهمتي",
    modalOutcomeLabel: "المخرجات والأدلة",
    modalLimitLabel: "حدود العمل",
    case: "عرض التفاصيل",
    artNote: "رسم توضيحي",
    noExternal: "لا توجد نسخة عامة منشورة موثقة لهذا المشروع",
    statusComplete: "منجز",
    statusActive: "جارٍ",
    statusConcept: "فكرة / بحث",
    statusPaused: "متوقف مؤقتًا",
    linkProject: "افتح المشروع",
    linkGitHub: "المستودع / الأدلة",
    linkBlog: "عرض التجربة العامة",
    tabGroup: "طريقة العمل",
  },
  en: {
    sceneReal: "Real",
    scenePixel: "Pixel",
    sceneProof: "Proof",
    numooContext: "Team capstone · 2026",
    ncmContext: "Co-op internship · 2025",
    pathyContext: "Published website · 2026",
    flowCaption: "Integration flow · Illustration",
    flowLabel: "Integration flow",
    flowInterface: "Web interface",
    flowInput: "Collect input",
    flowService: "Connect the request to model output",
    flowModel: "Team models",
    flowOutput: "Return a result to display",
    caseDemo: "Try the interactive demo ↗",
    copyCase: "Copy case link",
    caseCopied: "Case link copied.",
    caseCopyManual: "The link is selected for copying.",
    caseUrlLabel: "Case study URL",
    skillLearning: "Learning",
    skillTool: "Tool",
    skillPractice: "Practice",
    navLabel: "Primary navigation",
    mobileNavLabel: "Mobile navigation",
    skipLink: "Skip to content",
    journeyLabel: "Career and education milestones",
    sceneLabel: "Muath’s VR portrait and pixel character",
    sceneControls: "Scene layers",
    realSceneTitle: "Makkah, Saudi Arabia",
    realSceneLink: "Meet Muath ↗",
    labTabs: "Lab demos",
    searchResults: "Search results",
    portraitAlt: "Muath wearing a VR headset and holding controllers",
    pixelAlt: "Pixel-art Muath at a computer",
    meetingAlt: "Muath Alsulami in a meeting",
    numooAlt: "Conceptual illustration of the Numoo interface",
    ncmAlt: "Conceptual illustration of monitoring metrics",
    pathyAlt: "Illustration of Git branches",
    modalObjectiveLabel: "Problem and objective",
    modalNextLabel: "Possible next step",

    brandArabic: "Muath Alsulami",
    navHome: "Home",
    navWork: "Work",
    navApproach: "Approach",
    navSkills: "Skills",
    navAbout: "About",
    navContact: "Contact",
    heroEyebrow: "MAKKAH, SAUDI ARABIA",
    heroName: "Muath Alsulami",
    heroRole: "Software development · AI integration",
    heroLead:
      "I build web interfaces and integrate AI models. My co-op at the National Center for Meteorology focused on monitoring services.",
    viewWork: "Selected work",
    professionalSummary: "Professional summary",
    location: "Makkah, Saudi Arabia",
    railOne: "B.Sc. Artificial Intelligence",
    railOneSub: "Umm Al-Qura University · 2026 · 3.54/4",
    railTwo: "Hands-on monitoring experience",
    railTwoSub: "National Center for Meteorology · 2025",
    railThree: "Software and integration",
    railThreeSub: "Numoo · Flask · GitHub",
    featuredTitle: "Selected work",
    featuredIntro:
      "A team capstone, a systems observability co-op, and a published learning project.",
    visualConcept: "Conceptual illustration",
    statusCompleted: "Completed",
    statusPublished: "Published",
    numooFeatured:
      "Team capstone on stock-direction prediction. My part: interface work and Flask integration with models developed by teammates.",
    ncmTitle: "Systems observability",
    ncmFeatured:
      "IT internship work using Docker, Prometheus, Grafana, and Loki.",
    pathyFeatured:
      "An educational site published on GitHub Pages with attention to responsiveness, performance, and accessibility.",
    openCase: "View case study",
    atlasTitle: "Project atlas",
    atlasIntro: "Work in progress, early research, and concept proposals.",
    atlasCountLabel: "projects, experiments & concepts",
    filterAll: "All",
    filterDone: "Completed",
    filterActive: "In progress",
    filterConcept: "Research / idea",
    filterPaused: "Paused",
    atlasFootnote:
      "Statuses reflect my latest documented progress; “research” does not mean a system has been built or field-tested.",
    methodTitle: "Build. Integrate. <em>Observe.</em>",
    methodIntro:
      "How I approach interfaces, integration, and observability across projects.",
    tabBuild: "Build",
    tabIntegrate: "Integrate",
    tabObserve: "Observe",
    methodDisclaimer: "Illustrative diagram, not live telemetry.",
    skillsTitle: "Tools in practice",
    skillsIntro: "Where I used each tool and what I am learning.",
    skillsGroupOne: "Development & Integration",
    skillsGroupTwo: "Observability & Systems",
    skillsGroupThree: "Tools, Methods & Exploration",
    brandNote:
      "Company marks identify the tools only; general skills use independent illustrative symbols.",
    brandSources: "Sources & trademarks ↗",
    aboutTitle: "From Makkah to software development",
    aboutBody:
      "I graduated in Artificial Intelligence from Umm Al-Qura University and enjoy building software and understanding what makes systems useful and dependable. I contributed to the Numoo interface and Flask integration, gained hands-on observability experience at the National Center for Meteorology, and now work to turn research ideas into testable plans and experiments.",
    factGrad: "Graduated · Second Class Honors",
    factGpa: "GPA",
    factNcm: "NCM internship · April–July",
    viewSnapshot: "Printable professional snapshot",
    journeyTitle: "Education, co-op, and projects",
    journeyIntro:
      "Milestones from Umm Al-Qura University to current projects and experiments.",
    contactTitle: "Get in touch",
    contactBody:
      "I welcome opportunities and thoughtful conversations around software development, AI integration, and turning ideas into practical, testable solutions.",
    contactLinkedin: "Connect on LinkedIn",
    backToTop: "Back to top ↑",
    modalRoleLabel: "My contribution",
    modalOutcomeLabel: "Outputs and evidence",
    modalLimitLabel: "Scope and limitations",
    case: "Explore case",
    artNote: "Illustrative art",
    noExternal: "No verified public release for this project",
    atlasLink: "Explore the project atlas ↗",
    statusComplete: "Completed",
    statusActive: "In progress",
    statusConcept: "Research / concept",
    statusPaused: "Paused",
    linkProject: "Live project",
    linkGitHub: "Repository / evidence",
    linkBlog: "Public experiment",
    tabGroup: "Engineering approach",
  },
};
const projects = [
  {
    id: "numoo",
    state: "complete",
    year: "2026",
    title: ["Numoo | نمو", "Numoo"],
    short: [
      "مشروع تخرج جماعي للتنبؤ باتجاه الأسهم، مع تركيز مساهمتي على الواجهة والتكامل.",
      "A team stock-direction prediction capstone focused on interface and integration work.",
    ],
    role: [
      "طورت أجزاء من واجهة التطبيق ودمجت Flask وربطت الواجهة بمخرجات نماذج عمل عليها أعضاء الفريق.",
      "Contributed to the user interface, Flask integration and linking the interface with model outputs created by teammates.",
    ],
    outcome: [
      "مساهمة مكتملة ضمن مشروع تخرج جماعي. الأدوات: Python، Flask وواجهات الويب.",
      "Completed contribution within a team capstone. Tools included Python, Flask, and web interfaces.",
    ],
    limit: [
      "لا أنسب لنفسي تدريب GRU أو AraBERT أو XGBoost، ولا أصف التطبيق بأنه منتج منشور للعامة دون دليل.",
      "I do not claim to have trained the team’s GRU, AraBERT or XGBoost models, nor to have launched a public production product.",
    ],
    tags: ["Flask", "UI", "Integration"],
    links: [],
  },
  {
    id: "ncm",
    state: "complete",
    year: "2025",
    title: ["تدريب الأرصاد | Observability", "NCM / Observability"],
    short: [
      "تجربة تدريب تعاوني في تقنية المعلومات: حاويات ومقاييس ولوحات مراقبة وسجلات.",
      "IT co-op work involving containers, metrics, monitoring dashboards and logs.",
    ],
    role: [
      "عملت خلال التدريب على Docker/Compose، Prometheus، Node Exporter، Grafana، Loki وتقارير المتابعة.",
      "Worked with Docker/Compose, Prometheus, Node Exporter, Grafana, Loki and technical reporting during co-op.",
    ],
    outcome: [
      "تدريب تعاوني في المركز الوطني للأرصاد بجدة من 10 أبريل إلى 25 يوليو 2025، مع لوحات وتقارير ضمن بيئة التدريب.",
      "Co-op internship at the National Center for Meteorology in Jeddah, April 10–July 25, 2025, with dashboards and internship reporting.",
    ],
    limit: [
      "الرسومات في الموقع توضيحية وليست بيانات تشغيل حقيقية للمركز. ولا أدّعي ملكية منصة إنتاج مستقلة.",
      "Website diagrams are illustrative, not actual NCM telemetry. This is not presented as an independently owned production platform.",
    ],
    tags: ["Docker", "Grafana", "Prometheus", "Loki"],
    links: [],
  },
  {
    id: "pathy",
    state: "complete",
    year: "2026",
    title: ["تطبيق Git × Pathy", "Git × Pathy"],
    short: [
      "موقع تعليمي منشور عبر GitHub Pages وتطويره موثق في المستودع وطلبات الدمج.",
      "Published GitHub Pages learning site with documented repository and pull-request work.",
    ],
    role: [
      "التعامل مع Git وGitHub، إدارة تحسينات الواجهة والمحتوى، والنشر والفحص في مشروع التدريب.",
      "Git and GitHub workflow, interface/content improvements, publishing, and checks in a training project.",
    ],
    outcome: [
      "مستودع عام وموقع منشور قابلان للفحص.",
      "Public repository and live site are available to inspect.",
    ],
    limit: [
      "درجات Lighthouse القديمة تخص تشغيلًا سابقًا محددًا، وليست نتيجة مُعاد قياسها لهذا الموقع.",
      "Previous Lighthouse results belong to a specific older test and are not current measurements for this portfolio.",
    ],
    tags: ["Git", "GitHub", "HTML", "Web"],
    links: [
      ["live", "https://muathmalsulami.github.io/learn-git-with-pathy/"],
      ["repo", "https://github.com/muathmalsulami/learn-git-with-pathy/"],
    ],
  },
  {
    id: "portfolio",
    state: "active",
    year: "2026",
    title: ["MUATH — الهوية الرقمية", "MUATH — Personal Portfolio"],
    short: [
      "تصميم وتطوير بورتفوليو تفاعلي يجمع بين الصورة الواقعية والهوية الرقمية ودراسات الحالة.",
      "An evolving personal portfolio connecting a real portrait, digital self and project case studies.",
    ],
    role: [
      "صياغة المحتوى، اختبار الاتجاهات التصميمية، وتطوير نسخ متعاقبة للتجربة الثنائية العربية/الإنجليزية.",
      "Iterative design direction, content verification and bilingual website development.",
    ],
    outcome: [
      "هذه النسخة قابلة للتشغيل محليًا ومهيأة للنشر بعد التدقيق النهائي.",
      "This version can run locally and is packaged for review before publication.",
    ],
    limit: [
      "الهوية النهائية للشعار واختبارات Safari والقياسات الحقلية لم تُعتمد بعد.",
      "Final logo, real-device Safari testing and field performance measurements are not yet finalized.",
    ],
    tags: ["Design", "Motion", "RTL", "Accessibility"],
    links: [],
  },
  {
    id: "fas7a",
    state: "active",
    year: "2026",
    title: ["فسحة زيرو | Fas7a Zero", "Fas7a Zero"],
    short: [
      "تجربة مشروع رقمي ناشئ يجري تطوير عرضه وخطوات تنفيذه.",
      "An early digital project with ongoing work on presentation and execution steps.",
    ],
    role: [
      "بحث المنتج والهوية وإعادة صياغة خطوات إطلاق قابلة للتنفيذ.",
      "Product research, positioning and defining practical launch steps.",
    ],
    outcome: [
      "تجربة عامة على Blogger، لا تُقدّم هنا على أنها شركة أو منتج مكتمل.",
      "A public Blogger experiment, not represented as an established company or finished product.",
    ],
    limit: [
      "نموذج العمل والتحقق من المستخدمين والنتائج التجارية ما زالت تحتاج إثباتًا.",
      "Business model, customer validation and commercial outcomes still need evidence.",
    ],
    tags: ["Product", "Web", "Research"],
    links: [["blog", "https://fas7azero.blogspot.com/"]],
  },
  {
    id: "mizan",
    state: "concept",
    year: "2026",
    title: ["مِيزان الحي", "Mizan Al Hayy"],
    short: [
      "بحث في عدالة الوصول الفعلي إلى الحدائق والظل والخدمات عبر شبكة المشاة في مكة.",
      "Research into walking-network access to parks, shade and services in Makkah.",
    ],
    role: [
      "بلورة المشكلة، تحديد مصادر البيانات والمنافسين، وتقييم قيود القياس المكاني.",
      "Problem framing, identifying data sources/competitors, and studying spatial measurement limits.",
    ],
    outcome: [
      "اتجاه بحثي وخطة استقصاء، وليس خريطة نتائج ميدانية معتمدة.",
      "Research direction and investigation plan, not a validated field-results map.",
    ],
    limit: [
      "البيانات والمقاييس والنتائج المحلية تحتاج تحققًا قبل أي ادعاء عن العدالة المكانية.",
      "Local datasets, measurements and results need verification before equity claims.",
    ],
    tags: ["GIS", "Research", "Makkah"],
    links: [],
  },
  {
    id: "drone",
    state: "concept",
    year: "2026",
    title: ["إنذار طرق ذكي بالدرون", "Drone Road-Safety Concept"],
    short: [
      "مفهوم لدرون إنذار مبكر للحوادث يعتمد على التوجيه والرؤية الليلية والتحذير البصري.",
      "An early-warning drone concept combining routing, night vision and visual alerts.",
    ],
    role: [
      "التصور الهندسي، دراسة المستشعرات والمخاطر والقيود التنظيمية ومقارنة البدائل.",
      "System concept, sensor research, risk/regulatory analysis and option comparisons.",
    ],
    outcome: [
      "نموذج بحثي مقترح لهاكاثون النقل؛ لا يوجد إطلاق ميداني مثبت.",
      "Research proposal for a transport hackathon; no verified field deployment.",
    ],
    limit: [
      "الأصالة والبراءة وسلامة الطيران والإنذار البصري لم تثبت باختبارات أو موافقات رسمية.",
      "Novelty, patentability, flight safety and visual signaling are not field-tested or regulator-approved.",
    ],
    tags: ["CV", "Drones", "Safety"],
    links: [],
  },
  {
    id: "signals",
    state: "concept",
    year: "2026",
    title: ["إشارات المرور الذكية بالكاميرا", "Camera-Based Adaptive Signals"],
    short: [
      "تصور لنظام إشارات يعتمد على الرؤية الحاسوبية بدلاً من حلقات الاستشعار الأرضية.",
      "A conceptual adaptive traffic signal based on computer vision rather than ground induction loops.",
    ],
    role: [
      "مقارنة مبدئية لجدوى الكاميرا، تدفق القرار، ومخاطر الاعتمادية والخصوصية.",
      "Initial comparison of camera feasibility, decision flow, reliability and privacy risks.",
    ],
    outcome: [
      "فكرة في مسار هاكاثون النقل، وليست منظومة مرور مجرّبة.",
      "Transport-hackathon concept, not a road-tested traffic system.",
    ],
    limit: [
      "تحتاج اختبارات وموافقات وبيانات مرور حقيقية قبل أي ادعاء بتحسين زمن الانتظار.",
      "Requires road data, testing and approvals before any congestion-reduction claim.",
    ],
    tags: ["CV", "Mobility", "Research"],
    links: [],
  },
  {
    id: "miraa",
    state: "paused",
    year: "2026",
    title: ["مِرآة | MIRAA", "MIRAA"],
    short: [
      "اتجاه لتدريب لغة الإشارة السعودية مع نتائج أولية، أُوقف مؤقتًا بسبب البيانات والحقوق.",
      "Saudi sign-language trainer research with early evaluations, paused over data and rights.",
    ],
    role: [
      "بحث تكامل التجربة والتحليل والتقييم واتخاذ قرار التوقف بناءً على قيود واضحة.",
      "Experience/integration research, evaluation review and evidence-led pause decision.",
    ],
    outcome: [
      "تجارب أولية داخل نطاق تطويري محدود، لا منتج معتمد للنشر.",
      "Early evaluations in a limited development setting, not a released product.",
    ],
    limit: [
      "حقوق البيانات وملاءمة التعميم وإتاحة dataset للتوزيع غير محسومة.",
      "Data rights, generalization and dataset redistribution were not resolved.",
    ],
    tags: ["AI", "Accessibility", "Research"],
    links: [],
  },
  {
    id: "kaust",
    state: "concept",
    year: "2026",
    title: ["تحدي رؤية حاسوبية | KAUST", "KAUST Computer Vision Challenge"],
    short: [
      "مشاركة وتجارب على مهمة تنبؤ بصري وتوثيق طرق إنتاج ملفات التسليم.",
      "Computer-vision challenge experimentation and documented submission reproducibility.",
    ],
    role: [
      "التحقق من صحة ملفات التسليم ومسار إعادة إنتاجها، ومراجعة متطلبات الأهلية.",
      "Submission artifact validation, reproducibility checks and eligibility review.",
    ],
    outcome: [
      "تجارب منافسة وتسليمات تمت مناقشتها؛ ليست شهادة فوز أو نظامًا منشورًا.",
      "Competition experiments and discussed submissions, not a prize claim or public system.",
    ],
    limit: [
      "النتائج النهائية وترتيب المسابقة والأهلية لم تُثبت هنا.",
      "Final rankings and eligibility outcomes are not evidenced here.",
    ],
    tags: ["Computer Vision", "Evaluation"],
    links: [],
  },
  {
    id: "naqeesh",
    state: "concept",
    year: "2026",
    title: ["نقيش", "Naqeesh"],
    short: [
      "فكرة مختارة في مرحلة مفاضلة أفكار مرتبطة باحتياجات محلية.",
      "A shortlisted idea in an early local-impact concept exploration.",
    ],
    role: [
      "مقارنة فكرة المشروع مع بدائل وتقييم مبدئي للجدوى والتميّز.",
      "Early concept comparison and preliminary feasibility/differentiation scoring.",
    ],
    outcome: [
      "مذكرة فكرة، لا تطبيق مكتمل.",
      "Concept notes, not a completed app.",
    ],
    limit: [
      "المشكلة المحددة والمستخدمون والسوق والمنتج تحتاج توثيقًا إضافيًا قبل النشر التفصيلي.",
      "Specific problem, audience, market and product need more evidence before a detailed public claim.",
    ],
    tags: ["Discovery", "Concept"],
    links: [],
  },
  {
    id: "bayyinah",
    state: "concept",
    year: "2026",
    title: ["بيّنة", "Bayyinah"],
    short: [
      "فكرة ضمن مسح أولي لمشاريع تقنية محلية، لم تبدأ مرحلة المنتج.",
      "An early local technology idea without a product implementation phase.",
    ],
    role: [
      "مفاضلة وتقييم أولي للفكرة ضمن مجموعة مقترحات.",
      "Comparative early idea assessment.",
    ],
    outcome: [
      "مفهوم أولي موثق في مرحلة اختيار الأفكار.",
      "Preliminary concept only.",
    ],
    limit: [
      "لا واجهة عامة ولا نموذج مُتحقق منه.",
      "No public UI or validated prototype.",
    ],
    tags: ["Concept", "Research"],
    links: [],
  },
  {
    id: "meeqat",
    state: "concept",
    year: "2026",
    title: ["ميقات", "Meeqat"],
    short: [
      "مفهوم بحثي مبكر في سياق مشاريع ذات أثر محلي محتمل.",
      "An early concept explored for possible local impact.",
    ],
    role: [
      "دراسة أولية وترتيبها بين أفكار بديلة.",
      "Initial research and prioritization among alternatives.",
    ],
    outcome: [
      "فكرة فقط؛ ليست خدمة منشورة.",
      "Concept only, not a published service.",
    ],
    limit: [
      "المتطلبات التفصيلية والجدوى والتحقق الميداني لم تُنجز.",
      "Detailed requirements, feasibility and field validation remain open.",
    ],
    tags: ["Concept", "Planning"],
    links: [],
  },
];
const skills = [
  {
    key: "python",
    group: "dev",
    name: "Python",
    desc: [
      "برمجة وتكامل وسكربتات عملية",
      "Programming, integration and practical scripting",
    ],
    proof: "NCM / Numoo",
  },
  {
    key: "flask",
    group: "dev",
    name: "Flask",
    desc: [
      "ربط الواجهات بمهام التطبيق والنماذج",
      "Connecting interfaces with application and model functionality",
    ],
    proof: "Numoo",
  },
  {
    key: "html",
    group: "dev",
    name: "HTML",
    desc: [
      "هيكلة صفحات ويب قابلة للوصول",
      "Semantic and accessible web structure",
    ],
    proof: "Pathy / MUATH",
  },
  {
    key: "css",
    group: "dev",
    name: "CSS",
    desc: [
      "هوية مرئية وتجاوب وتكوينات",
      "Visual systems, responsive layouts and composition",
    ],
    proof: "Pathy / MUATH",
  },
  {
    key: "javascript",
    group: "dev",
    name: "JavaScript",
    desc: [
      "تفاعل واجهات ومكونات موقع",
      "Interface interaction and website components",
    ],
    proof: "Portfolio",
  },
  {
    key: "api",
    group: "dev",
    name: "REST / API",
    desc: [
      "تكامل الواجهة والخدمات ضمن المشاريع",
      "Interface-service integration in project work",
    ],
    proof: "Numoo",
  },
  {
    key: "sql",
    group: "dev",
    name: "SQL / Data",
    desc: [
      "أساسيات تنظيم البيانات وتحليلها",
      "Data organization and analysis foundations",
    ],
    proof: "Academic",
    learning: true,
  },
  {
    key: "ux",
    group: "dev",
    name: "UI / UX",
    desc: [
      "تحسين التدفق والوضوح وسهولة التصفح",
      "Flow, hierarchy and usability improvements",
    ],
    proof: "Numoo / MUATH",
  },
  {
    key: "docker",
    group: "systems",
    name: "Docker",
    desc: [
      "إدارة الحاويات والخدمات",
      "Containerized services and environments",
    ],
    proof: "NCM",
  },
  {
    key: "prometheus",
    group: "systems",
    name: "Prometheus",
    desc: [
      "مقاييس تشغيلية وجمع البيانات",
      "Operational metrics and collection",
    ],
    proof: "NCM",
  },
  {
    key: "grafana",
    group: "systems",
    name: "Grafana",
    desc: ["تصميم لوحات المراقبة", "Monitoring dashboard construction"],
    proof: "NCM",
  },
  {
    key: "loki",
    group: "systems",
    name: "Loki",
    desc: ["السجلات التشغيلية ومتابعتها", "Operational log exploration"],
    proof: "NCM",
  },
  {
    key: "linux",
    group: "systems",
    name: "Linux",
    desc: [
      "استخدام عملي في بيئات تقنية",
      "Hands-on use in technical environments",
    ],
    proof: "Practical use",
  },
  {
    key: "git",
    group: "systems",
    name: "Git",
    desc: ["إدارة الإصدارات والفروع", "Version control and branching"],
    proof: "Pathy",
  },
  {
    key: "github",
    group: "systems",
    name: "GitHub",
    desc: [
      "مستودعات وطلبات دمج ونشر",
      "Repositories, pull requests and publishing",
    ],
    proof: "Pathy / GitHub",
  },
  {
    key: "observability",
    group: "systems",
    name: "Observability",
    desc: [
      "فهم المقاييس والسجلات والصحة التشغيلية",
      "Metrics, logs and operational insight",
    ],
    proof: "NCM",
  },
  {
    key: "gitactions",
    group: "practice",
    name: "CI / CD",
    desc: [
      "مفاهيم عمليات البناء والنشر",
      "Build and delivery workflow concepts",
    ],
    proof: "Learning",
    learning: true,
  },
  {
    key: "ai",
    group: "practice",
    name: "AI Integration",
    desc: [
      "فهم ودمج مخرجات نماذج ضمن التطبيقات",
      "Understanding and integrating model outputs",
    ],
    proof: "Numoo / Research",
  },
  {
    key: "vision",
    group: "practice",
    name: "Computer Vision",
    desc: [
      "بحث وتحديات ومفاهيم تطبيقات رؤية",
      "Research, challenges and vision concepts",
    ],
    proof: "KAUST / Drone",
    learning: true,
  },
  {
    key: "writing",
    group: "practice",
    name: "Documentation",
    desc: [
      "تقارير تقنية وREADME وتوثيق مساهمات",
      "Technical reporting, READMEs and contribution boundaries",
    ],
    proof: "NCM / Pathy",
  },
];
const milestones = [
  {
    when: "2022",
    title: ["بداية الدراسة", "University begins"],
    text: [
      "الانطلاق في بكالوريوس العلوم في الذكاء الاصطناعي بجامعة أم القرى.",
      "Started the B.Sc. in Artificial Intelligence at Umm Al-Qura University.",
    ],
  },
  {
    when: "2025",
    title: ["تدريب المركز الوطني للأرصاد", "NCM internship"],
    text: [
      "تدريب تعاوني في جدة من أبريل إلى يوليو، مع أدوات مراقبة وحاويات.",
      "April–July co-op in Jeddah working with observability and containers.",
    ],
  },
  {
    when: "2026",
    title: ["التخرج ومشروع Numoo", "Graduation & Numoo"],
    text: [
      "تخرجت في 28 يونيو بمرتبة الشرف الثانية، بعد مساهمة في مشروع التخرج الجماعي.",
      "Graduated June 28 with Second Class Honors following team capstone work.",
    ],
  },
  {
    when: "2026",
    title: ["نشر موقع Pathy", "Pathy project published"],
    text: [
      "إتمام مشروع تدريبي باستخدام Git وGitHub ونشر موقع قابل للفحص.",
      "Completed a Git/GitHub learning project and published a live site.",
    ],
  },
  {
    when: "NOW",
    title: ["أبحاث وهوية شخصية متطورة", "Research and evolving identity"],
    text: [
      "تطوير أفكار بحثية وموقع شخصي، مع تمييز مراحل التنفيذ.",
      "Developing research ideas and a portfolio while clearly labeling their stage.",
    ],
  },
];
const stageDetails = {
  build: {
    ar: [
      "أبدأ بتجربة المستخدم",
      "تطوير الواجهات يعني أن يعرف المستخدم أين يبدأ وماذا سيحدث. هذه الخبرة ظهرت في مساهمتي بواجهة Numoo.",
      "Numoo · UI / UX",
    ],
    en: [
      "I begin with the user experience",
      "An interface is useful when people understand where to start and what happens next. This is reflected in my Numoo UI contribution.",
      "Numoo · UI / UX",
    ],
    label: "BUILD / EXPERIENCE",
  },
  integrate: {
    ar: [
      "أربط الواجهة بالمنطق",
      "من خلال Flask ربطت واجهة المشروع بمكونات طوّرها أعضاء آخرون في الفريق. القدرة على التكامل تختلف عن ادعاء تدريب النماذج.",
      "Flask · Numoo",
    ],
    en: [
      "I connect interfaces to logic",
      "Using Flask, I connected the project interface with components developed by other team members. Integration is distinct from training the models.",
      "Flask · Numoo",
    ],
    label: "INTEGRATE / SOFTWARE",
  },
  observe: {
    ar: [
      "أراقب ما يحدث بعد التشغيل",
      "خلال تدريب الأرصاد استخدمت أدوات الحاويات والمقاييس واللوحات والسجلات لفهم بيئة الأنظمة.",
      "Docker · Prometheus · Grafana · Loki",
    ],
    en: [
      "I observe what happens after launch",
      "During my NCM internship I worked with containers, metrics, dashboards and logs to understand system behavior.",
      "Docker · Prometheus · Grafana · Loki",
    ],
    label: "OBSERVE / SYSTEMS",
  },
};
let lang = "ar",
  theme = "dark",
  activeFilter = "all",
  activeStage = "build",
  lastOpener = null;
const t = (k) => translations[lang][k] || k;
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function renderProjects() {
  const filtered = projects.filter(
    (p) =>
      p.state !== "complete" &&
      (activeFilter === "all" || p.state === activeFilter),
  );
  document.getElementById("atlasCount").textContent = String(filtered.length);
  const root = get("atlasGrid");
  root.innerHTML = filtered
    .map((p) => {
      const title = esc(p.title[lang === "ar" ? 0 : 1]);
      const desc = esc(p.short[lang === "ar" ? 0 : 1]);
      return `<article class="atlas-card" data-state="${p.state}">
        <div class="atlas-art" aria-hidden="true"><img src="${assetPath(`assets/project-art/${p.id}.svg`)}" width="700" height="330" alt="" loading="lazy" decoding="async"></div>
        <div class="atlas-body">
          <span class="state-chip ${p.state}">${esc(t("status" + p.state[0].toUpperCase() + p.state.slice(1)))}</span>
          <h3>${title}</h3><p>${desc}</p>
        </div>
        <button class="atlas-open" type="button" data-project="${p.id}" aria-label="${esc(t("case"))}: ${title}"><span>${esc(t("case"))}</span><span aria-hidden="true">↗</span></button>
      </article>`;
    })
    .join("");
}
// Brand marks use recognizable vector outlines from Simple Icons / Devicon, never recolored by CSS.
// Concepts such as REST, AI integration and UX intentionally retain symbolic pictograms.
const BRAND_MARKS = new Set([
  "python",
  "flask",
  "html",
  "css",
  "javascript",
  "docker",
  "prometheus",
  "grafana",
  "loki",
  "linux",
  "git",
  "github",
]);
function renderSkills() {
  for (const group of ["dev", "systems", "practice"]) {
    const id = {
      dev: "skillsDevelopment",
      systems: "skillsSystems",
      practice: "skillsPractice",
    }[group];
    get(id).innerHTML = skills
      .filter((s) => s.group === group)
      .map((s) => {
        const mark = BRAND_MARKS.has(s.key);
        const path = mark
          ? `assets/brand-logos/${s.key}.svg`
          : `assets/icons/${s.key}.svg`;
        const category = s.learning
          ? t("skillLearning")
          : mark
            ? t("skillTool")
            : t("skillPractice");
        return `<article class="skill-card ${mark ? "with-brand" : "with-concept"}" data-skill="${s.key}">
    <span class="skill-icon ${mark ? "brand-lockup" : "concept-lockup"}" aria-hidden="true"><img src="${assetPath(path)}" width="44" height="44" alt="" loading="lazy" decoding="async"></span>
    <div class="skill-description">
      <h3><bdi lang="en">${esc(s.name)}</bdi></h3>
      <p>${esc(s.desc[lang === "ar" ? 0 : 1])}</p>
      <div class="skill-evidence ${s.learning ? "is-learning" : ""}"><span>${category}</span><span aria-hidden="true"> · </span><bdi>${esc(s.proof)}</bdi></div>
    </div>
   </article>`;
      })
      .join("");
  }
}
function renderJourney() {
  get("journeyTrack").innerHTML = milestones
    .map(
      (m) =>
        `<article class="journey-item"><span class="journey-dot" aria-hidden="true"></span><div class="journey-card"><span class="journey-year">${m.when === "NOW" && lang === "ar" ? "الآن" : m.when}</span><h3>${esc(m.title[lang === "ar" ? 0 : 1])}</h3><p>${esc(m.text[lang === "ar" ? 0 : 1])}</p></div></article>`,
    )
    .join("");
}
function renderStage(stage) {
  activeStage = stage;
  get("stageDescription").setAttribute("aria-labelledby", "stage-" + stage);
  document.querySelectorAll("[data-stage]").forEach((b) => {
    const on = b.dataset.stage === stage;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", String(on));
    b.tabIndex = on ? 0 : -1;
  });
  document
    .querySelectorAll(".diagram-node")
    .forEach((n) => n.classList.toggle("is-active", n.dataset.node === stage));
  const d = stageDetails[stage],
    v = d[lang];
  get("stageTitle").textContent = v[0];
  get("stageText").textContent = v[1];
  get("stageEvidence").textContent = v[2];
  get("stageLabel").textContent = d.label;
}
function applyLang(next) {
  lang = next;
  document.documentElement.lang = next;
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.lang = next;
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const k = el.dataset.i18n;
    if (translations[next][k] !== undefined) {
      if (
        [
          "featuredTitle",
          "atlasTitle",
          "methodTitle",
          "skillsTitle",
          "aboutTitle",
          "journeyTitle",
          "contactTitle",
        ].includes(k)
      )
        el.innerHTML = translations[next][k];
      else el.textContent = translations[next][k];
    }
  }
  for (const [dataKey, attribute] of [
    ["i18nLabel", "aria-label"],
    ["i18nAlt", "alt"],
  ]) {
    document
      .querySelectorAll(
        attribute === "alt" ? "[data-i18n-alt]" : "[data-i18n-label]",
      )
      .forEach((element) =>
        element.setAttribute(attribute, t(element.dataset[dataKey])),
      );
  }
  const lv = next === "ar";
  get("heroEnglish").hidden = !lv;
  get("heroArabic").hidden = lv;
  const languageSwitch = get("languageSwitch");
  languageSwitch.textContent = lv ? "English" : "العربية";
  languageSwitch.lang = lv ? "en" : "ar";
  languageSwitch.dir = lv ? "ltr" : "rtl";
  get("themeToggle").setAttribute(
    "aria-label",
    lv ? "تغيير المظهر" : "Toggle appearance",
  );
  get("menuToggle").setAttribute(
    "aria-label",
    lv ? "فتح القائمة" : "Open menu",
  );
  get("dialogClose").setAttribute("aria-label", lv ? "إغلاق" : "Close");
  renderProjects();
  renderSkills();
  renderJourney();
  renderStage(activeStage);
  document.title = lv
    ? "معاذ السلمي — MUATH / Atelier"
    : "Muath Alsulami — MUATH / Atelier";
  try {
    localStorage.setItem("muath-lang", next);
  } catch {}
}
function applyTheme(next) {
  theme = next;
  document.documentElement.dataset.theme = next;
  get("themeToggle").setAttribute("aria-pressed", String(next === "light"));
  document.querySelector('meta[name="theme-color"]').content =
    next === "light" ? "#f9f4ef" : "#100b21";
  try {
    localStorage.setItem("muath-theme", next);
  } catch {}
}
const caseDetails = {
  numoo: {
    ar: [
      "احتاج مشروع التخرج إلى واجهة تُدخل البيانات وتعرض مخرجات نماذج الفريق للتنبؤ باتجاه الأسهم.",
      "توثيق عقد الإدخال والإخراج وإضافة اختبارات تكامل وواجهة قابلة للمشاركة.",
    ],
    en: [
      "The team needed an interface to submit inputs and display outputs from its stock-direction models.",
      "Document the input and output contract and add integration tests and a shareable interface preview.",
    ],
  },
  ncm: {
    ar: [
      "كان الهدف التدريبي متابعة حالة الخدمات والحاويات وربط المقاييس بسياق السجلات.",
      "إنشاء عرض تعليمي ببيانات مصطنعة يوضح التنبيه والتحقق منه عبر المقاييس والسجلات.",
    ],
    en: [
      "The co-op work aimed to make service and container health visible and relate metrics to logs.",
      "Build a public example with synthetic data that shows how a signal can be investigated using metrics and logs.",
    ],
  },
  pathy: {
    ar: [
      "الهدف من المشروع التدريبي ممارسة سير عمل Git وGitHub على موقع تعليمي يمكن زيارته ومراجعة شفرته.",
      "إعادة تدقيق إمكانية الوصول على نسخة الموقع المنشورة وتوثيق النتائج مع رقم الإصدار.",
    ],
    en: [
      "The learning project put Git and GitHub workflows into practice through a browsable website with public source.",
      "Repeat accessibility checks on the published site and document the results against a specific revision.",
    ],
  },
};
function openCase(id, opener) {
  const p = projects.find((x) => x.id === id);
  if (!p) return;
  if (get("projectDialog").open) return;
  lastOpener = opener || document.activeElement;
  get("projectDialog").dataset.case = id;
  get("caseShareStatus").textContent = "";
  get("caseShareUrl").hidden = true;
  get("caseCopy").hidden =
    location.protocol === "file:" ||
    location.pathname.endsWith("MUATH_Atelier_Standalone.html");
  const details = Object.hasOwn(caseDetails, id) ? caseDetails[id][lang] : null;
  get("modalObjectiveBlock").hidden = !details;
  get("modalNextBlock").hidden = !details;
  get("modalObjective").textContent = details?.[0] || "";
  get("modalNext").textContent = details?.[1] || "";
  const i = lang === "ar" ? 0 : 1;
  get("modalImage").src = assetPath(`assets/project-art/${p.id}.svg`);
  get("modalImage").alt = `${t("artNote")}: ${p.title[i]}`;
  get("modalTitle").textContent = p.title[i];
  get("modalStatus").textContent = t(
    "status" + p.state[0].toUpperCase() + p.state.slice(1),
  );
  get("modalStatus").className = `project-state ${p.state}`;
  get("modalSummary").textContent = p.short[i];
  get("modalRole").textContent = p.role[i];
  get("modalOutcome").textContent = p.outcome[i];
  get("modalLimit").textContent = p.limit[i];
  get("modalLinks").replaceChildren();
  for (const [type, url] of p.links) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent =
      (type === "repo"
        ? t("linkGitHub")
        : type === "blog"
          ? t("linkBlog")
          : t("linkProject")) + " ↗";
    get("modalLinks").appendChild(a);
  }
  const labMode = { numoo: "integrate", ncm: "observe" }[id];
  if (labMode) {
    const demo = document.createElement("a");
    demo.href = "#evidence";
    demo.textContent = t("caseDemo");
    demo.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      lastOpener = null;
      get("projectDialog").close();
      document.dispatchEvent(
        new CustomEvent("portfolio:lab", { detail: labMode }),
      );
      location.hash = "evidence";
      get("lab-" + labMode).focus({ preventScroll: true });
      get("evidence").scrollIntoView();
    });
    get("modalLinks").append(demo);
  }
  if (!p.links.length) {
    const note = document.createElement("span");
    note.textContent = t("noExternal");
    note.style.color = "var(--muted)";
    note.style.fontSize = "12px";
    get("modalLinks").appendChild(note);
  }
  get("projectDialog").showModal();
  get("dialogClose").focus();
}
document.addEventListener("portfolio:case", (event) =>
  openCase(event.detail.id, event.detail.opener),
);
document.addEventListener("portfolio:command-projects", (event) => {
  event.detail.push(
    ...projects.map((project) => ({
      id: project.id,
      title: project.title,
      aliases: project.tags,
      type: "case",
    })),
  );
});
function closeMobileNav() {
  get("mobileNav").hidden = true;
  get("menuToggle").setAttribute("aria-expanded", "false");
}
function initialize() {
  try {
    const remembered = localStorage.getItem("muath-lang");
    if (remembered === "en") lang = "en";
    const th = localStorage.getItem("muath-theme");
    if (th === "light") theme = "light";
  } catch {}
  applyTheme(theme);
  applyLang(lang);
  get("languageSwitch").addEventListener("click", () =>
    applyLang(lang === "ar" ? "en" : "ar"),
  );
  get("themeToggle").addEventListener("click", () =>
    applyTheme(theme === "dark" ? "light" : "dark"),
  );
  get("menuToggle").addEventListener("click", () => {
    const next = get("mobileNav").hidden;
    get("mobileNav").hidden = !next;
    get("menuToggle").setAttribute("aria-expanded", String(next));
  });
  get("mobileNav").addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    closeMobileNav();
    const target = document.querySelector(link.hash);
    target?.setAttribute("tabindex", "-1");
    target?.focus({ preventScroll: true });
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      !get("mobileNav").hidden &&
      !document.querySelector("dialog[open]")
    ) {
      closeMobileNav();
      get("menuToggle").focus();
    }
  });
  const desktop = matchMedia("(min-width: 921px)");
  desktop.addEventListener("change", (event) => {
    if (event.matches) closeMobileNav();
  });
  const navLinks = [
    ...document.querySelectorAll(".desktop-nav a,.mobile-nav a"),
  ];
  const navSections = [...document.querySelectorAll("main > section[id]")];
  const parentSections = { atlas: "work", journey: "about" };
  let sectionOffsets = [];
  let currentSection;
  const measureNavigation = () => {
    const pageTop = scrollY;
    sectionOffsets = navSections.map((section) => ({
      id: section.id,
      top: section.getBoundingClientRect().top + pageTop,
    }));
  };
  const updateNavigation = (scrollable) => {
    const guide = scrollY + Math.min(innerHeight * 0.36, 240);
    const reachedBottom = scrollable > 0 && scrollY >= scrollable - 4;
    const current = reachedBottom
      ? "contact"
      : sectionOffsets.findLast((section) => section.top <= guide)?.id ||
        "home";
    const hash = "#" + (parentSections[current] || current);
    if (currentSection === hash) return;
    currentSection = hash;
    for (const link of navLinks) {
      if (link.hash === hash) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  };
  get("atlasGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-project]");
    if (btn) openCase(btn.dataset.project, btn);
  });
  document
    .querySelectorAll(".feature-link")
    .forEach((b) =>
      b.addEventListener("click", () => openCase(b.dataset.project, b)),
    );
  const deepLink = new URLSearchParams(location.search).get("case");
  if (deepLink) openCase(deepLink);
  get("caseCopy").addEventListener("click", async () => {
    const id = get("projectDialog").dataset.case;
    const url = new URL(location.href);
    url.hash = "";
    url.search = "";
    url.searchParams.set("case", id);
    try {
      await navigator.clipboard.writeText(url.href);
      if (
        get("projectDialog").dataset.case !== id ||
        !get("projectDialog").open
      )
        return;
      get("caseShareStatus").textContent = t("caseCopied");
    } catch {
      if (
        get("projectDialog").dataset.case !== id ||
        !get("projectDialog").open
      )
        return;
      const field = get("caseShareUrl");
      field.value = url.href;
      field.hidden = false;
      field.focus();
      field.select();
      get("caseShareStatus").textContent = t("caseCopyManual");
    }
  });
  get("dialogClose").addEventListener("click", () =>
    get("projectDialog").close(),
  );
  get("projectDialog").addEventListener("click", (e) => {
    if (e.target === get("projectDialog")) get("projectDialog").close();
  });
  get("projectDialog").addEventListener("close", () => lastOpener?.focus());
  document.querySelectorAll(".filter-buttons button").forEach((b) =>
    b.addEventListener("click", () => {
      activeFilter = b.dataset.filter;
      document.querySelectorAll(".filter-buttons button").forEach((btn) => {
        const on = btn === b;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-pressed", String(on));
      });
      renderProjects();
    }),
  );
  document
    .querySelectorAll(".method-switch button")
    .forEach((b, index, arr) => {
      b.addEventListener("click", () => renderStage(b.dataset.stage));
      b.addEventListener("keydown", (e) => {
        if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
          e.preventDefault();
          const shift =
            (e.key === "ArrowRight" ? 1 : -1) * (lang === "ar" ? -1 : 1);
          const next =
            e.key === "Home"
              ? arr[0]
              : e.key === "End"
                ? arr[arr.length - 1]
                : arr[(index + shift + arr.length) % arr.length];
          renderStage(next.dataset.stage);
          next.focus();
        }
      });
    });
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    document.documentElement.classList.add("motion-ready");
    const io = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("is-visible"));
  let progressFrame = 0;
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    const progress =
      scrollable > 0 ? Math.max(0, Math.min(1, scrollY / scrollable)) : 0;
    get("readingProgress").style.transform = "scaleX(" + progress + ")";
    updateNavigation(scrollable);
    progressFrame = 0;
  };
  const scheduleProgress = () => {
    if (!progressFrame) progressFrame = requestAnimationFrame(updateProgress);
  };
  addEventListener("scroll", scheduleProgress, { passive: true });
  const updateLayout = () => {
    measureNavigation();
    scheduleProgress();
  };
  addEventListener("resize", updateLayout);
  if ("ResizeObserver" in window)
    new ResizeObserver(updateLayout).observe(document.body);
  measureNavigation();
  updateProgress();
  const scene = get("heroScene");
  if (scene && matchMedia("(hover:hover) and (pointer:fine)").matches) {
    let moveFrame = 0;
    scene.addEventListener("pointermove", (e) => {
      if (moveFrame || reducedMotion.matches) return;
      moveFrame = requestAnimationFrame(() => {
        const b = scene.getBoundingClientRect();
        scene.style.setProperty(
          "--light-x",
          ((e.clientX - b.left) / b.width) * 100 + "%",
        );
        scene.style.setProperty(
          "--light-y",
          ((e.clientY - b.top) / b.height) * 100 + "%",
        );
        const x = ((e.clientX - b.left) / b.width - 0.5) * 12;
        const y = ((e.clientY - b.top) / b.height - 0.5) * 9;
        scene.style.setProperty("--stage-x", `${x}px`);
        scene.style.setProperty("--stage-y", `${y}px`);
        scene.style.setProperty(
          "--stage-front-x",
          `${(-x * 0.45).toFixed(2)}px`,
        );
        scene.style.setProperty(
          "--stage-front-y",
          `${(-y * 0.45).toFixed(2)}px`,
        );
        moveFrame = 0;
      });
    });
    scene.addEventListener("pointerleave", () => {
      cancelAnimationFrame(moveFrame);
      moveFrame = 0;
      scene.style.setProperty("--stage-x", "0px");
      scene.style.setProperty("--stage-y", "0px");
      scene.style.setProperty("--stage-front-x", "0px");
      scene.style.setProperty("--stage-front-y", "0px");
    });
  }
}
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", initialize);
else initialize();
