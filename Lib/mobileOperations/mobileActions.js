
/*
 * This is a customized function to perform tap
 * Parameters 
 * Message - to be logged in report
 * Driver - to perform action
 * Element - On which action will be performed
 * timer - time duration
 */

var init = function (message, driver) {
	var initialize = allure.createStep(message, function () {
		return driver
		.pause(40000)
			.init()
			.pause(20000);
	});
	return initialize();
}

var waitForExist = function (message, driver, element, timer) {
	var waitfrexist = allure.createStep(message, function () {
		return driver
			.waitForExist(element, timer);
	});
	return waitfrexist();
}



var touchActionTap = function (message, driver, element) {
	var mainTap = allure.createStep(message, function () {
		return driver
			.waitForExist(element, 40000)
			.touchAction(element, 'tap');
	});
	return mainTap();
}

var setValue = function (message, driver, element, value) {
	var setVal = allure.createStep(message, function () {
		return driver
			.waitForExist(element, 30000)
			.setValue(element, value);
	});
	return setVal();
}

var swipeUp = function (message, driver, element, offset, speed) {
	var scroll = allure.createStep(message, function () {
		return driver
			.pause(2000)
			.swipeUp(element, offset, speed);
	})
	return scroll();
}

var back = function (message, driver) {
	var navigate = allure.createStep(message, function () {
		return driver
			.pause(2000)
			.back();
	})
	return navigate();
}

var swipeDown = function (message, driver, element, offset, speed) {
	var scroll = allure.createStep(message, function () {
		return driver
			.pause(2000)
			.swipeDown(element, offset, speed);
	})
	return scroll();
}

var closeApp = function (message, driver) {
	var closeApplication = allure.createStep(message, function () {
		return driver
			.closeApp()
			.reset();
	});
	return closeApplication();
}


exports.init = init;
exports.touchActionTap = touchActionTap;
exports.setValue = setValue;
exports.swipeUp = swipeUp;
exports.back = back;
exports.swipeDown = swipeDown;
exports.waitForExist = waitForExist;
exports.closeApp = closeApp;