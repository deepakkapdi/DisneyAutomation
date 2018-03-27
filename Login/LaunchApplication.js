
var modules = require('../../config/requiredModules.js');
//var logReport = require('../../node_modules/mochawesome-screenshots/logReport.js');
var driver = modules.webdriverio.remote(modules.config);
require("mocha-allure-reporter");
//var status = modules.webdriverio.getEachStepStatus();
describe('Testing Photopass Link Photos Functionality', function () {
  const launchAppStep = allure.createStep("Launching Application", () => {
    // do something
    this.timeout(20000);
    return modules.appSpecificFunctions.launchApp(modules, driver,logReport);
  });

  const loginApp = allure.createStep("Signing in Application", () => {
    // do something
    this.timeout(20000);
    return modules.appSpecificFunctions.loginToApp(modules, driver)
  });


  const screenshot = allure.createStep("saveScreenshot", async name => {
    const res = await driver.screenshot();
    // Webdriver.io produces values as base64-encoded string. Allure expects either plain text
    // string or Buffer. So, we are decoding our value, using constructor of built-in Buffer object
    allure.createAttachment(name, new Buffer(res.value, "base64"));
  });

  it("LaunchApplication" + "_" + Date.now(), function () {
    this.timeout(900000);
    launchAppStep()
    .then(function () {
    loginApp()
  })
      .then(function () {
        return modules.appSpecificFunctions.NavigatePhotopass(modules, driver)
      })
      .then(function () {
        return modules.appSpecificFunctions.LinkPhotos(modules, driver)
      })
      .then(function () {
        return modules.appSpecificFunctions.NavigateAvatar(modules, driver)
      })
      .then(function () {
        return modules.appSpecificFunctions.SignOut(modules, driver)
      })
      .then(function () {
        return modules.appSpecificFunctions.CloseApp(modules, driver)
      })

  });

  afterEach("take screenshot on failure", function() {
    if (this.currentTest.state !== "passed") {
      return screenshot("screenshot on fail");
    }
  });

});
