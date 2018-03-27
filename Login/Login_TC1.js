//var client = require('../../config/requiredModules').client;


//console.log(modules.config);
//var client1 = client.cap();
var TC1 = function() {
  var modules = require('../../config/requiredModules.js');
  var client = modules.webdriverio.remote(modules.config);
  return client.init();

         //.pause(30000)
         //.touchAction('android=new UiSelector().resourceId("android:id/button2")','tap');

}
exports.TC1 = TC1;
