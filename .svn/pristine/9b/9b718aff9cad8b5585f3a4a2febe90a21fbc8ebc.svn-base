
var modules = require('../../config/requiredModules.js');
var driver = modules.webdriverio.remote(modules.config); 

describe('Testing_Photopass_Link_Photos_Functionality', function () {

  it("PhotoPass_Link_Photos", function () {
    this.timeout(900000);
       return modules.appSpecificFunctions.launchApp(modules, driver)
          .then(function () {
            return modules.appSpecificFunctions.loginToApp(modules, driver)
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
      })

    it("Login test case", function () {
      this.timeout(900000);
         return modules.appSpecificFunctions.launchApp(modules, driver)
          .then(function () {
          return modules.appSpecificFunctions.loginToApp1(modules, driver);
        })
    })

    afterEach("take screenshot on failure", function () {
      this.timeout(900000);
      if (this.currentTest.state !== "passed") {
        return modules.helperFunctions.screenshot(driver);
      }
    })
  })

