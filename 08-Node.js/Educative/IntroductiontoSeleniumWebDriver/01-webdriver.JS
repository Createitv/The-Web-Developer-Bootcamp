const webdriver = require("selenium-webdriver");
var test = require("selenium-webdriver/testing");
var assert = require("assert");

const chromeDriver = require("chromedriver");
const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set("chromeOptions", {
	args: [
		"--headless",
		"--disable-gpu",
		"--no-sandbox",
		"--disable-dev-shm-usage",
	],
});

var driver;
const timeOut = 15000;

test.describe("User Authentication", function () {
	test.before(function () {
		this.timeout(timeOut);

		driver = new webdriver.Builder()
			.forBrowser("chrome")
			.withCapabilities(chromeCapabilities)
			.build();
	});

	test.beforeEach(function () {
		this.timeout(timeOut);
		driver.get("http://travel.agileway.net");
	});

	test.after(function () {
		driver.quit();
	});

	test.it("Invalid user", function () {
		driver.findElement(webdriver.By.name("username")).sendKeys("agileway");
		driver.findElement(webdriver.By.name("password")).sendKeys("badpass");
		driver.findElement(webdriver.By.name("commit")).click();
	});

	test.it("User can login successfully", function () {
		driver.findElement(webdriver.By.name("username")).sendKeys("agileway");
		driver.findElement(webdriver.By.name("password")).sendKeys("testwise");
		driver.findElement(webdriver.By.name("commit")).click();
		driver.getTitle().then(function (the_title) {
			assert.equal("Agile Travel", the_title);
		});
	});
});
