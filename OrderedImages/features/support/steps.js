const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const { sleep } = require("./util");

When("Images are placed in {string} order", {timeout: 2 * 5000}, async function (correctness) {
  await this.init(correctness === "correct");
  await this.imageOrder();
});
  
Then("I should see {string}", async function (phrase) {
  const resultText = await this.getResultPhrase();
  expect(resultText).to.eql(phrase);
});
