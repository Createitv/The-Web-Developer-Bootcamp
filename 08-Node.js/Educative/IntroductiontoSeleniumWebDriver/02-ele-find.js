const webdriver = require("selenium-webdriver");
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set("chromeOptions", {
	args: [
		"--headless",
		"--disable-gpu",
		"--no-sandbox",
		"--disable-dev-shm-usage",
	],
});

var test = require("selenium-webdriver/testing");

var assert = require("assert");

var driver;
const timeOut = 15000;

test.describe("Locators", function () {
	test.before(function () {
		this.timeout(timeOut);

		driver = new webdriver.Builder()
			.forBrowser("chrome")
			.withCapabilities(chromeCapabilities)
			.build();
	});

	test.after(function () {
		driver.quit();
	});

	test.beforeEach(function () {
		driver.get("file://" + __dirname + "/../../site/locators.html");
	});

	// test cases

	var By = webdriver.By;

	test.it("By ID", function () {
		driver.findElement(webdriver.By.id("submit_btn")).click();
	});

	test.it("By Name", function () {
		driver.findElement(By.name("comment")).sendKeys("Selenium Cool");
	});

	test.it("By Link Text", function () {
		driver.findElement(By.linkText("Cancel")).click();
	});

	test.it("By Partial Link Text", function () {
		// will click the "Cancel" link
		driver.findElement(By.partialLinkText("ance")).click();
	});

	test.it("By Class name", function () {
		driver.findElement(By.className("btn-primary")).click(); // Submit button
		driver.findElement(By.className("btn")).click(); // Cancel link
	});

	test.it("By CSS", function () {
		driver.findElement(By.css("#div2 > input[type='checkbox']")).click();
	});

	test.it("By tagName", function () {
		driver
			.findElement(By.tagName("body"))
			.getText()
			.then(function (the_page_text) {
				console.log(the_page_text);
			});
	});
});
