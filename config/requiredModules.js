// These are required packages needed for the scripts . Add your packages and import this file.

module.exports = {
		webdriverio: require('../node_modules/webdriverio'),
		expect: require('../node_modules/chai').expect,
		config: require('./desiredCapabilities').Android,
		config1: require('./desiredCapabilities').emulator1,
		config2: require('./desiredCapabilities').emulator2,
		androidOR: require('../ObjectMap/androidOR.js').DisneyAppOR,
		testData: require('../testData/testData'),
		helperFunctions: require('../Lib/Helpers/HelperFunctions.js'),
		appSpecificFunctions: require('../Lib/AppSpecificFunctions/applicationUtilities.js'),
		mobileActions: require('../Lib/mobileOperations/mobileActions.js'),
		//appiumController: require('../node_modules/appium-controller')
	//	parallel: require('../node_modules/mocha.parallel'),
	//	promise  = require('../node_modules/bluebird')

}