var modules = require('../config/requiredModules.js');
var parallel = require('mocha.parallel');
var promise = require('bluebird');
var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var config1 = require('../config/desiredCapabilities').emulator1;
var config2 = require('../config/desiredCapabilities').emulator2;
var driver1 = webdriverio.remote(config1);
var driver2 = webdriverio.remote(config2);

parallel('Welcome to disney app Parallel Testing', function () {

    it("LaunchApplication", function (done) {
        setTimeout(done, 9000000);
        console.log("Starting 1st it");
        var TCase1 = require('./Login/LaunchApplication');
		TCase1;
		var TCase2 = require('./Login/LaunchApplication');
		TCase2;
    });

    it("LoginApplication", function (done) {
        console.log("Starting 2nd it");
        setTimeout(done, 9000000);
        var TCase1 = require('./Login/LaunchApplication');
        return TCase1.Testing_Photopass_Link_Photos_Functionality(modules, driver2);
    });

});
