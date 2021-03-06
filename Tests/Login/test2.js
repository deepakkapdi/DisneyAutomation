var modules = require('../../config/requiredModules.js');
var config = require('../../config/desiredCapabilities').emulator2;
var driver = modules.webdriverio.remote(config);

describe("Suite 2", function () {
  
  it("Test Case 2", function () {
    this.timeout(9000000);
    return modules.appSpecificFunctions.launchApp(modules, driver)
      .then(function () {
        return modules.appSpecificFunctions.loginToApp(modules, driver);
      })
      .then(function () {
        return modules.appSpecificFunctions.NavigatePhotopass(modules, driver);
      })
      .then(function () {
        return modules.appSpecificFunctions.LinkPhotos(modules, driver);
      })
      .then(function () {
        return modules.appSpecificFunctions.NavigateAvatar(modules, driver);
      })
      .then(function () {
        return modules.appSpecificFunctions.SignOut(modules, driver);
      })
      .then(function () {
        return modules.appSpecificFunctions.CloseApp(modules, driver);
      })
  })

  afterEach("take screenshot on failure", function () {
    this.timeout(900000);
    if (this.currentTest.state !== "passed") {
      return modules.helperFunctions.screenshot(driver);
    }
  })
}) 