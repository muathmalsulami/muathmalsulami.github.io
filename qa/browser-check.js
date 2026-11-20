async page => {
  const url = 'http://127.0.0.1:8766/';
  const axePath = 'qa-deps/node_modules/axe-core/axe.min.js';
  const errors = [];
  const results = [];
  const audits = [];
  const check = (condition, message) => { if (!condition) throw Error(message); };
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('response', response => {
    if (response.url().startsWith(url) && response.status() >= 400) errors.push(response.status() + ' ' + response.url());
  });

  for (const [width,height] of [[320,740],[375,812],[390,844],[430,932],[768,900],[1024,900],[1440,920],[1920,1080],[3840,2160]]) {
    await page.setViewportSize({width,height});
    for (const lang of ['ar','en']) {
      for (const theme of ['dark','light']) {
        await page.goto(url);
        if (await page.locator('html').getAttribute('lang') !== lang) await page.locator('#languageSwitch').click();
        if (await page.locator('html').getAttribute('data-theme') !== theme) await page.locator('#themeToggle').click();
        await page.evaluate(async () => {
          await document.fonts.ready;
          scrollTo({top:0,behavior:'instant'});
        });
        const state = await page.evaluate(async () => {
          const images = [...document.images].filter(img => !img.closest('dialog'));
          for (const image of images) image.loading = 'eager';
          await Promise.allSettled(images.map(image => image.decode()));
          return {
            dir: document.documentElement.dir,
            heading: document.querySelector('h1').innerText,
            horizontalOverflow: Math.max(0,document.documentElement.scrollWidth - innerWidth),
            brokenImages: images.filter(image => !image.naturalWidth).map(image => image.getAttribute('src')),
            cards: document.querySelectorAll('.atlas-card').length,
            brandIcons: document.querySelectorAll('.brand-lockup img').length
          };
        });
        check(state.dir === (lang === 'ar' ? 'rtl':'ltr'), 'Direction ' + lang);
        check(state.heading === (lang === 'ar' ? 'معاذ السلمي' : 'Muath Alsulami'), 'Heading ' + lang);
        check(state.horizontalOverflow === 0, 'Overflow ' + JSON.stringify({width,lang,theme,state}));
        check(state.brokenImages.length === 0, 'Image errors ' + state.brokenImages.join(','));
        check(state.cards === 10 && state.brandIcons === 12, 'Atlas or skill count ' + JSON.stringify(state));
        results.push({width,height,lang,theme});
        if ([390,1440].includes(width)) {
          await page.screenshot({path:'candidate-'+width+'-'+lang+'-'+theme+'.png',animations:'disabled'});
        }
        if ((width === 390 && lang === 'ar') || (width === 1440 && lang === 'en')) {
          await page.addScriptTag({path:axePath});
          const audit = await page.evaluate(async () => {
            for (const reveal of document.querySelectorAll('.reveal')) reveal.classList.add('is-visible');
            const {violations} = await axe.run({runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa']}});
            return violations.map(({id,nodes}) => ({id,nodes:nodes.map(n=>({target:n.target,message:n.failureSummary}))}));
          });
          audits.push({width,lang,theme,violations:audit});
        }
      }
    }
  }

  await page.setViewportSize({width:390,height:844});
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto(url);
  await page.locator('#menuToggle').click();
  check(await page.locator('#mobileNav').isVisible(),'Mobile menu did not open');
  await page.keyboard.press('Escape');
  check(await page.locator('#mobileNav').isHidden(),'Escape did not close mobile menu');
  check(await page.evaluate(() => document.activeElement.id === 'menuToggle'),'Mobile focus did not return');
  await page.locator('#menuToggle').click();
  await page.locator('#mobileNav a[href="#work"]').click();
  check(await page.locator('#mobileNav').isHidden(),'Mobile link did not close menu');
  check(await page.evaluate(() => location.hash === '#work' && document.activeElement.id === 'work'),'Mobile hash or focus');
  const opener = page.locator('.feature-link[data-project=numoo]');
  await opener.click();
  check(await page.locator('#projectDialog').isVisible(),'Numoo case did not open');
  check(await page.locator('#modalObjective').innerText(), 'Missing case objective');
  check(await page.locator('#modalNext').innerText(), 'Missing case follow-up');
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => document.activeElement.matches('.feature-link[data-project=numoo]'));
  await page.locator('[data-view=real]').click();
  check(await page.locator('.scene-real').getAttribute('inert') === null,'Real link did not activate');
  await page.locator('[data-view=proof]').click();
  check(await page.locator('.scene-proof').getAttribute('inert') === null,'Proof link did not activate');
  check(await page.locator('.scene-real').getAttribute('inert') !== null,'Hidden Real still focusable');
  check(await page.locator('.scene-fragment').count() === 0,'Reduced motion created scene fragments');
  await page.locator('[data-view=pixel]').click();
  check(await page.locator('.scene-proof').getAttribute('inert') !== null,'Hidden Proof still focusable');
  await page.locator('[data-filter=paused]').click();
  check(await page.locator('.atlas-card').count() === 1,'Paused filter count');
  await page.locator('[data-filter=active]').click();
  check(await page.locator('.atlas-card').count() === 2,'Active filter count');
  await page.locator('[data-filter=concept]').click();
  check(await page.locator('.atlas-card').count() === 7,'Concept filter count');
  await page.locator('#stage-build').focus();
  await page.keyboard.press('End');
  check(await page.locator('#stage-observe').getAttribute('aria-selected') === 'true','Stage tab keyboard');
  await page.locator('#lab-observe').focus();
  await page.keyboard.press('End');
  check(await page.locator('#lab-integrate').getAttribute('aria-selected') === 'true','Lab tab keyboard');
  await page.locator('[data-signal=surge]').filter({visible:true}).click();
  check((await page.locator('#consoleLog').innerText()).includes('Flask'),'Lab scenario did not update');
  await page.locator('#commandLaunch').click();
  const input = page.locator('#commandQuery');
  await input.fill('zzzz');
  check((await page.locator('#commandStatus').innerText()).length > 0,'Search empty state');
  check(await page.locator('.command-result').count() === 0,'Search unexpectedly matched');
  await input.fill('MIRAA');
  check(await page.locator('.command-result').count() === 1,'MIRAA search');
  check(await input.getAttribute('aria-activedescendant') === 'command-option-0','Active option missing');
  await page.keyboard.press('Enter');
  check(await page.locator('#projectDialog').isVisible(),'Search did not open MIRAA');
  check(/MIRAA/.test(await page.locator('#modalTitle').innerText()),'Search opened wrong project');
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => document.activeElement.id === 'commandLaunch');
  await page.keyboard.press('Control+k');
  check(await page.locator('#commandPalette').isVisible(),'Keyboard search did not open');
  await input.fill('skills');
  await page.keyboard.press('Enter');
  check(await page.evaluate(() => location.hash === '#skills' && document.activeElement.id === 'skills'),'Search hash or focus');

  const saved = await page.evaluate(() => [localStorage.getItem('muath-lang'),localStorage.getItem('muath-theme')]);
  await page.goto(url+'?case=pathy');
  check(await page.locator('#projectDialog').isVisible(),'Case deep link failed');
  check(await page.locator('#modalLinks a').count() === 2,'Case evidence missing');
  check(await page.locator('html').getAttribute('lang') === saved[0],'Language persistence');
  check(await page.locator('html').getAttribute('data-theme') === saved[1],'Theme persistence');
  await page.goto(url+'professional-summary.html');
  check(await page.locator('#english').count() === 1,'Summary English section missing');

  const noScript = await page.context().browser().newContext({javaScriptEnabled:false,viewport:{width:320,height:740}});
  const staticPage = await noScript.newPage();
  await staticPage.goto(url);
  check(await staticPage.locator('.static-nav a[href="#work"]').isVisible(),'No-JS work navigation');
  check(await staticPage.locator('.static-nav a[href="#skills"]').isVisible(),'No-JS skills navigation');
  check(await staticPage.locator('#skills noscript p').first().isVisible(),'No-JS skills content');
  check(await staticPage.locator('.feature-link').first().isHidden(),'No-JS dead case button');
  check(await staticPage.getByRole('heading',{name:'معاذ السلمي',exact:true}).isVisible(),'No-JS homepage identity');
  await noScript.close();

  check(errors.length === 0,'Browser errors: '+errors.join(' | '));
  return {matrix:results,audits,errors,flows:'passed'};
}
