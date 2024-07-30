const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();
  try {
    await driver.get('http://localhost:3000');
    const initialTime = await driver.findElement(By.id('time')).getText();
    await driver.sleep(2000); // Wait for 2 seconds to allow time update
    const updatedTime = await driver.findElement(By.id('time')).getText();
    if (initialTime === updatedTime) {
      throw new Error('Time did not update');
    }
    console.log('Time updated successfully');
  } finally {
    await driver.quit();
  }
})();
