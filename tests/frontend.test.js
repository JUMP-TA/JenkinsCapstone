const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

describe('Time Update Test', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build();
    await driver.get('http://localhost:3000'); // Ensure the server is running locally
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should update the time every second', async () => {
    const initialTime = await driver.findElement(By.id('time')).getText();
    await driver.sleep(2000); // Wait for 2 seconds to allow time update
    const updatedTime = await driver.findElement(By.id('time')).getText();
    expect(initialTime).not.toBe(updatedTime);
  });
});

