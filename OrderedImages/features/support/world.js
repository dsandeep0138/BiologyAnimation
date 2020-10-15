const { setWorldConstructor, AfterAll } = require("cucumber");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chromedriver = require("chromedriver");
const driver = new Builder().forBrowser("chrome").build();

class browserBuild {
  constructor() {}

  async init(correctness) {
    await driver.manage().window().maximize();

    if (correctness) {
      await driver.get(`file:///${__dirname}/../../index1.html`);
    } else {
      await driver.get(`file:///${__dirname}/../../index.html`);
    }

    this.driver = driver;
  }

  async imageOrder() {
    const images = await this.driver.findElement(By.id("imageListItems"));
    const individuals = await images.findElements(By.tagName("li"));
    await this.driver.findElement(By.id("checkAnswer")).click();
  }

  async getResultPhrase() {
    const driver = this.driver;
    const elem = await driver.findElement(By.id("checked_order"));
    return elem.getText();
  }
}

AfterAll(async() => {
  await driver.quit();
});

setWorldConstructor(browserBuild);
