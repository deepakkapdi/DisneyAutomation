//These are desired capabilities for Android and iOS

exports.Android = {
	desiredCapabilities: {
	platformName: 'Android',
    platformVersion: '6.0',
    appPackage: 'com.disney.wdw.android',
    appActivity: 'com.disney.wdpro.park.activities.LoaderActivity',
    deviceName: 'Nexus 6',
    udid: 'emulator-5554',
    unicodeKeyboard: true,
    resetKeyboard: true,
    clearSystemFiles: true
	},
	host:'localhost',
    port:4723,
    bp:200
};

exports.emulator1 = {
	desiredCapabilities: {
	platformName: 'Android',
    platformVersion: '6.0',
    appPackage: 'com.disney.wdw.android',
    appActivity: 'com.disney.wdpro.park.activities.LoaderActivity',
    deviceName: 'Nexus 6.0',
    udid: 'emulator-5554',
    unicodeKeyboard: true,
    resetKeyboard: true,
    clearSystemFiles: true
	},
	host:'localhost',
    port:4723,
    bp:200
};	

exports.emulator2 = {
	desiredCapabilities: {
	platformName: 'Android',
    platformVersion: '6.0',
    appPackage: 'com.disney.wdw.android',
    appActivity: 'com.disney.wdpro.park.activities.LoaderActivity',
    deviceName: 'Nexus 6',
    udid: 'emulator-5556',
    unicodeKeyboard: true,
    resetKeyboard: true,
    clearSystemFiles: true
	},
	host:'localhost',
    port:5723,
    bp:100
};	