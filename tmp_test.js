const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push('PAGEERROR: ' + err.message));
  await page.goto('http://localhost:5181/flashcard_trainer_starwars.html');
  await page.waitForTimeout(1500);

  // open stats
  await page.click('#btn-stats');
  await page.waitForTimeout(500);
  console.log('--- after open stats, errors:', errors.length);

  // click close
  await page.click('#stats-close');
  await page.waitForTimeout(500);
  const statsOpen = await page.evaluate(() => document.getElementById('stats-overlay')?.classList.contains('open'));
  console.log('stats overlay open after close click:', statsOpen);

  // open search
  await page.click('#btn-search');
  await page.waitForTimeout(500);
  await page.fill('input[placeholder*="Пошук"]', 'apple');
  await page.waitForTimeout(500);
  await page.click('.search-row');
  await page.waitForTimeout(500);

  console.log('ALL ERRORS:', JSON.stringify(errors, null, 2));
  await browser.close();
})();
