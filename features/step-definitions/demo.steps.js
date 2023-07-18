const { Given, When, Then } = require('@wdio/cucumber-framework');
const Loginautomation= require('../pageobjects/pages/Text.page')
const Radiobuttonclass= require('../pageobjects/pages/radio.page')
const Dropdownclass = require('../pageobjects/pages/dropdown.page')
const Alertclass =require('../pageobjects/pages/alert.page')
const Handleclass= require('../pageobjects/pages/handletabs.page')
const logindata = require('../testingdata/logindata')
const Highlights= require('../pageobjects/pages/hihglight.page')



Given(/^user launches the browser$/, async() => {
	await browser.url('https://testautomationpractice.blogspot.com/')
    // await browser.maximizeWindow()
});

When(/^user enters the data in text fields$/, async() => {
    // Highlights.handlehighlight()
	await Loginautomation.automation(logindata.ename,logindata.email,logindata.ephone,logindata.eadress);
    console.log(await browser.execute(() => window.scrollY)) // returns 0
       await browser.scroll(0, 200)
       await browser.pause(1000)
       await browser.takeScreenshot()
});

When(/^user clicks on radio buttons$/, async() => {
	await Radiobuttonclass.radiocheck()
    await browser.takeScreenshot()
});

When(/^user click on checkboxes$/, async() => {
	console.log(await browser.execute(() => window.scrollY)) // returns 0
       await browser.scroll(0, 400)
       
});

When(/^user clicks in dropdowmns$/, async() => {
	await Dropdownclass.rdrop()
    await browser.takeScreenshot()
    console.log(await browser.execute(() => window.scrollY)) // returns 0
       await browser.scroll(0, -500)
});

When(/^user handles the alerts$/, async() => {
	await Alertclass.alertmethod()
    await browser.takeScreenshot()
});

When(/^user handles the frames$/, async() => {
	await Handleclass.handle('lenovo','name')
    await browser.pause(1000)
    await browser.takeScreenshot()
});

Then(/^the test should be passes$/, async() => {
	console.log("the test passed")
    await browser.takeScreenshot()
});

