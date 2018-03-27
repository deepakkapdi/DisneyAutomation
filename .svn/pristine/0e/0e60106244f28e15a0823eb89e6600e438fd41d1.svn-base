 function launchApp(modules, driver) {
 return driver
   .pause(1000)
   .then(function () {
     return modules.mobileActions.init("Launching Application", driver);
   })
   .then(function () {
     return modules.mobileActions.waitForExist("Wating for element", driver, modules.androidOR.launchPage_pushOKBtn, 20000);
   })
   .then(function () {
     return modules.mobileActions.touchActionTap("Tap on Dismiss button", driver, modules.androidOR.launchPage_pushDismiss);
   })
   .then(function () {
     return modules.mobileActions.touchActionTap("Tap on PullDown Image", driver, modules.androidOR.launchPage_pullDownImage);
   })
   .catch(function (ex) {
     return driver.pause(1000)
       .then(function () {
         return modules.mobileActions.touchActionTap("Tap on PullDown Image", driver, modules.androidOR.launchPage_pullDownImage);
       })
       .then(function () {
         return modules.mobileActions.touchActionTap("Tap on Dismiss button", driver, modules.androidOR.launchPage_pushDismiss);
       });
   });
} 

function loginToApp(modules, driver) {
    return driver
    .waitForExist(modules.androidOR.loginPage_signInLink, 10000)
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap on Sigin Link button", driver, modules.androidOR.loginPage_signInLink);
    })
    .then(function () {
      return modules.mobileActions.setValue("Set value for Email", driver, modules.androidOR.loginPage_emailTb, modules.testData.Login_TC1.Email);
    })
    .then(function () {
      return modules.mobileActions.setValue("Set value for Password", driver, modules.androidOR.loginPage_passwordTb, modules.testData.Login_TC1.Password);
    })
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap on Sign In Button", driver, modules.androidOR.loginPage_signInBtn);
    }).catch(function (ex) {
      return modules.mobileActions.touchActionTap("Tap on My Avatar link", driver, modules.androidOR.pg_Landing_myAvatar);
    });

} 

function loginToApp1(modules, driver) {
  return driver
    .waitForExist(modules.androidOR.loginPage_signInLink, 10000)
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap on Sigin Link button", driver, modules.androidOR.loginPage_signInLink);
    })
    .then(function () {
      return modules.mobileActions.setValue("Set value for Email", driver, modules.androidOR.loginPage_emailTb1, modules.testData.Login_TC1.Email);
    })
    .then(function () {
      return modules.mobileActions.setValue("Set value for Password", driver, modules.androidOR.loginPage_passwordTb, modules.testData.Login_TC1.Password);
    })
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap on Sign In Button", driver, modules.androidOR.loginPage_signInBtn);
      //}).catch(function (ex) {
      //return modules.mobileActions.touchActionTap("Tap on My Avatar link", driver, modules.androidOR.pg_Landing_myAvatar);
    });

}

function NavigatePhotopass(modules, driver) {
  return driver
    .waitForExist(modules.androidOR.pg_Landing_myAccountLink, 30000)
    .then(function () {
      return modules.mobileActions.swipeUp("Scroll from My Account to Photopass", driver, modules.androidOR.pg_Landing_refreshLink, 2000, 50);
    });
}

function LinkPhotos(modules, driver) {
  return driver
    .waitForExist(modules.androidOR.pg_Landing_linkandview, 10000)
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap on Link and view Photos", driver, modules.androidOR.pg_Landing_linkandview);
    })
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap on Link Photos", driver, modules.androidOR.pg_PhotoPass_linkPhotos);
    })
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap enter PhotopassId", driver, modules.androidOR.pg_linkYourPhotos_enterId);
    })
    .then(function () {
      return modules.mobileActions.setValue("Set value for PhotoPass ID", driver, modules.androidOR.pg_linkYourPhotos_idtb, modules.testData.Login_TC1.IDNumber)
    })
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap Submit Button", driver, modules.androidOR.pg_linkYourPhotos_submitbtn);
    })
}

function NavigateAvatar(modules, driver) {
  return driver
    .pause(3000)
    .then(function () {
      return modules.mobileActions.back("Navigate back", driver);
    })
    .then(function () {
      return modules.mobileActions.swipeDown("Scroll from Photopass to My Account", driver, modules.androidOR.pg_Landing_linkandview, 2000, 50);
    });
}

function SignOut(modules, driver) {
  return driver
    .pause(3000)
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap on My Account link", driver, modules.androidOR.pg_Landing_myAccountLink);
    })
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap SignOut link", driver, modules.androidOR.pg_signOutLink);
    })
    .then(function () {
      return modules.mobileActions.touchActionTap("Tap on Ok button", driver, modules.androidOR.launchPage_pushOKBtn);
    })
}


function CloseApp(modules, driver) {
  return driver
    .pause(1000)
    .then(function () {
      return modules.mobileActions.closeApp("Closing Application", driver);
    })
}


exports.launchApp = launchApp;
exports.loginToApp = loginToApp;
exports.NavigatePhotopass = NavigatePhotopass;
exports.LinkPhotos = LinkPhotos;
exports.NavigateAvatar = NavigateAvatar;
exports.SignOut = SignOut;
exports.CloseApp = CloseApp;
exports.loginToApp1 = loginToApp1; 