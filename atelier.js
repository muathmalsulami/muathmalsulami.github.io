/* CHAPTER 08 — real interaction studies, not screenshots of imaginary systems. */
'use strict';
(function(){
const root=document.documentElement;
const $=(selector,scope=document)=>scope.querySelector(selector);
const $$=(selector,scope=document)=>[...scope.querySelectorAll(selector)];
const lex={
 ar:{
  navEvidence:'المختبر',sceneSignature:'الواقع / الذات الرقمية',sceneProofTitle:'شخص حقيقي. وعمل يمكن التحقق منه.',sceneProofBody:'Numoo: واجهات + Flask · الأرصاد: المراقبة والسجلات',sceneProofLink:'استكشف الأدلة ↗',signatureNote:'الهوية تحكي القصة؛ والمشاريع تثبت المساهمة.',
  evidenceTitle:'مو بس أنظر للتقنية. <em>أشرح كيف تعمل.</em>',evidenceIntro:'تجربتان تفاعليتان توضيحيتان: كيف يمر الطلب بين الواجهة وFlask، وكيف تُقرأ مؤشرات المراقبة. لا تتضمن هذه التجارب بيانات تشغيل حقيقية أو نتائج نماذج.',
  proofHeadline:'Inside the system.',labSimBadge:'محاكاة توضيحية / ليست بيانات مباشرة',labObserveTitle:'ماذا لو تغيّرت حالة النظام؟',labObserveDesc:'اختر سيناريو لتتغير الإشارة وسجل الأحداث توضيحيًا. الفكرة: المقاييس تبيّن التغيّر، والسجلات توفر السياق، واللوحات تجعل المعلومة مرئية.',labObserveLesson:'استُخدمت مفاهيم المراقبة خلال تدريب الأرصاد، لكن البيانات المعروضة هنا مصطنعة لشرح الفكرة فقط.',
  labIntegrateTitle:'كيف تتصل الواجهة بوظيفة ذكية؟',labIntegrateDesc:'استكشف ثلاث خطوات توضيحية: طلب من الواجهة، معالجة عبر Flask، ثم إعادة المخرجات للواجهة. في Numoo كان دوري في الواجهة والتكامل؛ نماذج الفريق لم أقم بتدريبها.',labIntegrateLesson:'هذا المسار يمثل نوع المساهمة في المشروع، وليس نموذجًا إنتاجيًا منشورًا أو دليلاً على تدريب النموذج.',
  labLessonLabel:'ما الذي يمثله هذا المثال؟',labCaseLink:'شاهد دراسات الحالة ↗',signalSteady:'حالة مستقرة',signalSurge:'ارتفاع الحمل',signalRecover:'استعادة',metricSignal:'حالة المؤشر',metricAction:'سياق السجل',metricSource:'مصدر الرسم',evidenceDisclaimer:'المخططات والسجلات هنا تعليمية مصطنعة بالكامل؛ ليست قياسات المركز الوطني للأرصاد أو نتائج حقيقية لنموذج Numoo.',
  paletteTitle:'QUICK ACCESS / التنقل السريع',palettePlaceholder:'ابحث عن قسم أو مشروع...',paletteHint:'↑↓ للتنقل · Enter للفتح · Esc للإغلاق',
  controls:{observe:['مستقر','حمل مرتفع','تعافٍ'],integrate:['الواجهة','Flask','الاستجابة']},
  states:{observe:{steady:{signal:'STABLE',action:'NO ALERT',source:'SAMPLE',lines:['› example metric · nominal trend','› dashboard · normal visualization','› example logs · no alert']},surge:{signal:'ELEVATED',action:'INVESTIGATE',source:'SAMPLE',lines:['› example metric · sudden increase','› dashboard · attention highlighted','› example logs · investigate context']},recover:{signal:'RECOVERING',action:'REVIEW',source:'SAMPLE',lines:['› example metric · moving toward baseline','› dashboard · trend improving','› example logs · recovery context']}},integrate:{steady:{signal:'INPUT',action:'UI EVENT',source:'CONCEPT',lines:['› user submits example input','› UI validates request shape','› request prepared for service']},surge:{signal:'API',action:'FLASK',source:'CONCEPT',lines:['› Flask receives example request','› service invokes team component','› result passed to response layer']},recover:{signal:'OUTPUT',action:'UI UPDATE',source:'CONCEPT',lines:['› response arrives at interface','› UI presents example output','› no model inference executed here']}}},
  cmd:[['الرئيسية','SECTION'],['الأعمال','SECTION'],['المختبر التفاعلي','DEMO'],['أرشيف المشاريع','SECTION'],['المهارات','SECTION'],['عني','SECTION'],['رحلتي','SECTION'],['تواصل','SECTION'],['Numoo','CASE'],['المركز الوطني للأرصاد','CASE'],['Pathy / GitHub','CASE']]
 },
 en:{
  navEvidence:'Lab',sceneSignature:'REALITY / DIGITAL SELF',sceneProofTitle:'A real person. Verifiable work.',sceneProofBody:'Numoo: UI + Flask · NCM: monitoring and logs',sceneProofLink:'Explore evidence ↗',signatureNote:'The identity tells the story. The work proves the contribution.',
  evidenceTitle:'Don’t just see the technology. <em>Explore the reasoning.</em>',evidenceIntro:'Two illustrative interactive studies: how an interface communicates through Flask, and how a monitoring signal can be interpreted. No real operational telemetry or model results are used.',
  proofHeadline:'Inside the system.',labSimBadge:'ILLUSTRATIVE SIMULATION / NOT LIVE DATA',labObserveTitle:'What if the system state changes?',labObserveDesc:'Choose a scenario to alter the sample signal and event trace. Metrics reveal change, logs provide context, and dashboards make trends visible.',labObserveLesson:'Observability concepts were part of my NCM internship, but every signal shown here is synthetic and explanatory.',
  labIntegrateTitle:'How does an interface connect to intelligence?',labIntegrateDesc:'Follow a sample UI request, a Flask integration step, and an interface response. In Numoo my responsibility was UI and integration; I did not train the team’s models.',labIntegrateLesson:'This describes my type of contribution—not a public production API or evidence that I trained models.',
  labLessonLabel:'What does this demo represent?',labCaseLink:'Explore the case studies ↗',signalSteady:'Steady',signalSurge:'High load',signalRecover:'Recovery',metricSignal:'Signal state',metricAction:'Log context',metricSource:'Data origin',evidenceDisclaimer:'All charts and logs are synthetic educational examples. They are not NCM measurements or Numoo model outputs.',
  paletteTitle:'QUICK ACCESS / SEARCH',palettePlaceholder:'Search a section or project...',paletteHint:'↑↓ navigate · Enter open · Esc close',
  controls:{observe:['Steady','High load','Recovery'],integrate:['Interface','Flask','Response']},
  states:{observe:{steady:{signal:'STABLE',action:'NO ALERT',source:'SAMPLE',lines:['› sample metric · nominal trend','› sample dashboard · normal visualization','› sample logs · no alert']},surge:{signal:'ELEVATED',action:'INVESTIGATE',source:'SAMPLE',lines:['› sample metric · sudden increase','› sample dashboard · attention highlighted','› sample logs · investigate context']},recover:{signal:'RECOVERING',action:'REVIEW',source:'SAMPLE',lines:['› sample metric · moving toward baseline','› sample dashboard · trend improving','› sample logs · recovery context']}},integrate:{steady:{signal:'INPUT',action:'UI EVENT',source:'CONCEPT',lines:['› user submits example input','› UI validates request shape','› request prepared for service']},surge:{signal:'API',action:'FLASK',source:'CONCEPT',lines:['› Flask receives sample request','› service invokes team component','› result passed to response layer']},recover:{signal:'OUTPUT',action:'UI UPDATE',source:'CONCEPT',lines:['› response arrives at interface','› UI presents example output','› no model inference executed here']}}},
  cmd:[['Home','SECTION'],['Selected work','SECTION'],['Interactive lab','DEMO'],['Project atlas','SECTION'],['Skills','SECTION'],['About','SECTION'],['Journey','SECTION'],['Contact','SECTION'],['Numoo','CASE'],['National Center for Meteorology','CASE'],['Pathy / GitHub','CASE']]
 }
};
const navIds=['home','work','evidence','atlas','skills','about','journey','contact'];
const modeState={mode:'observe',signal:'steady'};
const paths={
 observe:{steady:[126,121,125,112,117,103,109,93,101,89,94,79,85],surge:[134,128,113,111,82,89,49,67,34,25,42,20,14],recover:[32,26,36,53,57,67,65,80,78,91,88,94,86]},
 integrate:{steady:[120,120,120,88,88,88,88,88,88,88,88,88,88],surge:[88,88,88,88,88,46,46,46,46,46,46,46,46],recover:[46,46,46,46,46,46,46,46,46,93,93,93,93]}
};
function language(){return root.dataset.lang==='en'?'en':'ar'}
function scenePixelTransition(scene){
 if(matchMedia('(prefers-reduced-motion: reduce)').matches||root.classList.contains('motion-off'))return;
 const rect=scene.getBoundingClientRect();if(!rect.width||!rect.height)return;
 const x=rect.width*.46,y=rect.height*.58;
 for(let i=0;i<13;i++){
  const el=document.createElement('i');el.className='scene-fragment';
  const col=i%3===0?'#ffcda3':i%3===1?'#cea5ff':'#ecb7d4';
  const size=3+(i%4)*2;
  el.style.cssText=`left:${x+(i%5-2)*16}px;top:${y+(i%3-1)*19}px;width:${size}px;height:${size}px;background:${col}`;
  scene.appendChild(el);
  const a=i/13*Math.PI*1.55;
  const dx=Math.cos(a)*((i%4+1)*19+20),dy=-Math.sin(a)*((i%5+1)*14+12);
  const motion=el.animate([
   {opacity:0,transform:'translate(0,0) scale(.55)'},
   {opacity:.86,offset:.18,transform:'translate(0,0) scale(1)'},
   {opacity:0,transform:`translate(${dx}px,${dy}px) rotate(${i%2?45:-25}deg) scale(.2)`}
  ],{duration:580+i%4*45,easing:'cubic-bezier(.22,.64,.18,1)',fill:'forwards'});
  motion.onfinish=()=>el.remove();motion.oncancel=()=>el.remove();
 }
}
function changeScene(mode){
 const scene=$('#heroScene');if(!scene)return;
 if(scene.dataset.view!==mode)scenePixelTransition(scene);
 scene.dataset.view=mode;
 $$('.scene-switch button',scene).forEach(btn=>{const active=btn.dataset.view===mode;btn.classList.toggle('is-active',active);btn.setAttribute('aria-pressed',String(active))});
}
function setDemo(mode,signal){
 if(!lex[language()])return;
 modeState.mode=mode;modeState.signal=signal;
 const l=lex[language()];const isObserve=mode==='observe';const lab=$('#proofLab');if(!lab)return;
 lab.dataset.lab=mode;lab.dataset.signal=signal;
 $$('.proof-lab-tabs button').forEach(b=>{const active=b.dataset.labMode===mode;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active))});
 const title=$('#labTitle'),desc=$('#labDescription'),lesson=$('#labLesson');
 title.textContent=isObserve?l.labObserveTitle:l.labIntegrateTitle;
 desc.textContent=isObserve?l.labObserveDesc:l.labIntegrateDesc;
 lesson.textContent=isObserve?l.labObserveLesson:l.labIntegrateLesson;
 const controls=$$('.scenario-controls button');
 controls.forEach((b,i)=>{const active=b.dataset.signal===signal;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));b.textContent=l.controls[mode][i]});
 $('#consoleLabel').textContent=isObserve?'OBSERVABILITY / SYNTHETIC':'FLASK INTEGRATION / CONCEPT';
 const state=l.states[mode][signal];
 $('#metricSignal').textContent=state.signal;
 $('#metricAction').textContent=state.action;
 $('#metricSource').textContent=state.source;
 const log=$('#consoleLog');log.replaceChildren();state.lines.forEach((line,i)=>{if(i)log.appendChild(document.createElement('br'));log.append(document.createTextNode(line))});
 const vals=paths[mode][signal];let d='';vals.forEach((y,i)=>d+=`${i?' L':'M'}${i*45} ${y}`);
 const p=$('#consolePath');p.setAttribute('d',d);
 const area=$('#consoleArea');area.setAttribute('d',`${d} L540 170 L0 170 Z`);
 p.classList.remove('is-drawing');if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&!root.classList.contains('motion-off')){void p.getBoundingClientRect();p.classList.add('is-drawing')}
}
const commands=[...navIds.map((id,i)=>({type:'nav',id,index:i})),{type:'case',id:'numoo',index:8},{type:'case',id:'ncm',index:9},{type:'case',id:'pathy',index:10}];
let filteredCommands=commands,selected=0,lastFocus=null;
function renderCommands(query=''){
 const l=lex[language()],s=query.trim().toLowerCase();
 filteredCommands=commands.filter(c=>{const label=l.cmd[c.index][0].toLowerCase();return !s || label.includes(s) || c.id.toLowerCase().includes(s) || c.type.includes(s)});
 selected=Math.min(selected,Math.max(0,filteredCommands.length-1));
 const parent=$('#commandResults');parent.replaceChildren();
 if(!filteredCommands.length){const e=document.createElement('p');e.className='command-empty';e.textContent=language()==='ar'?'لا توجد نتيجة. جرّب اسم المشروع أو القسم.':'No matches. Try a project or section name.';parent.append(e);return}
 filteredCommands.forEach((c,i)=>{
  const b=document.createElement('button');b.type='button';b.className='command-result'+(selected===i?' is-selected':'');b.setAttribute('role','option');b.setAttribute('aria-selected',String(selected===i));
  const label=document.createElement('span');label.textContent=l.cmd[c.index][0];
  const hint=document.createElement('small');hint.textContent=l.cmd[c.index][1];b.append(label,hint);
  b.addEventListener('mouseenter',()=>{selected=i;highlightCommand()});
  b.addEventListener('click',()=>activateCommand(c));parent.append(b);
 });
}
function highlightCommand(){ $$('.command-result').forEach((el,i)=>{el.classList.toggle('is-selected',i===selected);el.setAttribute('aria-selected',String(i===selected))}) }
function activateCommand(c){
 const dlg=$('#commandPalette');const origin=lastFocus;lastFocus=null;dlg.close();
 if(c.type==='nav'){
  location.hash='#'+c.id;
  const target=document.getElementById(c.id);if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true})}
 } else if(typeof window.openCase==='function'){window.openCase(c.id,origin)}
 else {const button=$(`[data-project="${c.id}"]`);button?.click()}
}
function openPalette(){const d=$('#commandPalette');if(!d||d.open)return;lastFocus=document.activeElement;$('#commandQuery').value='';selected=0;renderCommands();d.showModal();$('#commandQuery').focus()}
function closePalette(){const d=$('#commandPalette');if(d.open)d.close()}
function updateTranslations(){
 const l=lex[language()];
 $('#commandQuery')?.setAttribute('aria-label',language()==='ar'?'ابحث في الأقسام والمشاريع':'Search sections and projects');
 $('#commandLaunch')?.setAttribute('aria-label',language()==='ar'?'فتح التنقل السريع':'Open quick navigation');
 $('#commandClose')?.setAttribute('aria-label',language()==='ar'?'إغلاق التنقل السريع':'Close quick navigation');
 $$('[data-at]').forEach(el=>{if(l[el.dataset.at]!==undefined)el.textContent=l[el.dataset.at]});
 $$('[data-at-html]').forEach(el=>{if(l[el.dataset.atHtml]!==undefined)el.innerHTML=l[el.dataset.atHtml]});
 $$('[data-at-placeholder]').forEach(el=>{if(l[el.dataset.atPlaceholder]!==undefined)el.placeholder=l[el.dataset.atPlaceholder]});
 setDemo(modeState.mode,modeState.signal);
 if($('#commandPalette')?.open)renderCommands($('#commandQuery').value);
}
function init(){
 const scene=$('#heroScene');if(scene&&!scene.dataset.view)scene.dataset.view='all';
 $$('.scene-switch button').forEach(btn=>btn.addEventListener('click',()=>changeScene(btn.dataset.view)));
 $$('.proof-lab-tabs button').forEach((btn,index,all)=>{
  btn.addEventListener('click',()=>setDemo(btn.dataset.labMode,'steady'));
  btn.addEventListener('keydown',e=>{
   if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
    e.preventDefault();const next=all[(index+(e.key==='ArrowRight'?1:-1)+all.length)%all.length];
    setDemo(next.dataset.labMode,'steady');next.focus();
   }
  });
 });
 $$('.scenario-controls button').forEach(btn=>btn.addEventListener('click',()=>setDemo(modeState.mode,btn.dataset.signal)));
 const palette=$('#commandPalette');
 $('#commandLaunch')?.addEventListener('click',openPalette);
 $('#commandClose')?.addEventListener('click',closePalette);
 $('#commandQuery')?.addEventListener('input',e=>{selected=0;renderCommands(e.target.value)});
 $('#commandQuery')?.addEventListener('keydown',e=>{if(!filteredCommands.length)return;if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();selected=(selected+(e.key==='ArrowDown'?1:-1)+filteredCommands.length)%filteredCommands.length;highlightCommand();$$('.command-result')[selected]?.scrollIntoView({block:'nearest'});}else if(e.key==='Enter'){e.preventDefault();activateCommand(filteredCommands[selected])}});
 palette?.addEventListener('click',e=>{if(e.target===palette)closePalette()});
 palette?.addEventListener('close',()=>lastFocus?.focus?.());
 document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();palette?.open?closePalette():openPalette()} });
 new MutationObserver(mutations=>{if(mutations.some(m=>m.attributeName==='data-lang'))updateTranslations()}).observe(root,{attributes:true,attributeFilter:['data-lang']});
 updateTranslations();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
