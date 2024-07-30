const puppeteer = require('puppeteer');

describe('Time Update Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should update the time every second', async () => {
    const initialTime = await page.$eval('#time', el => el.textContent);
    await page.waitForTimeout(2000); // Wait for 2 seconds to allow time update
    const updatedTime = await page.$eval('#time', el => el.textContent);
    expect(initialTime).not.toBe(updatedTime);
  });
});
