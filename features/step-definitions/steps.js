const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const homePage = require('../pageobjects/home.page');
const searchPage = require('../pageobjects/search.page');


Given(/^I am on the ebay page/, async () => {
    homePage.open();
    expect(browser);
});

Given(/^I click search by category to open Electronics > (.*)$/, async (subCategory) => {
    await homePage.shopByCategory.click();
    await $(xpath = "//a[@class='scnd'][contains(.,'"+subCategory+"')]").click();
});

When(/^I click (.*) in the left navigation$/, async (subCategory1) => {
    await $(xpath = "//a[@class='b-textlink b-textlink--parent'][contains(.,'"+subCategory1+"')]").click();
});

Then(/^I click All Filters$/, async () => {
    await homePage.allfilters.click();
    await homePage.popUp.isDisplayed();
});

Given(/^I apply filter Condition$/, async () => {
    await homePage.conditionFilter.click();
    await homePage.conditionFilter.waitForDisplayed({timeout: 300});
    await homePage.condition.click();
});

When(/^I apply filter Price with price (.*)$/, async (price) => {
    await homePage.priceFilter.click();
    await homePage.priceInput.setValue(price);
});

When(/^I apply filter Item Location$/, async () => {
    await homePage.itemLocationFilter.click();
    await homePage.itemLocationFilter.waitForDisplayed({timeout: 300});
    await homePage.itemLocation.click();
    await homePage.applyButton.click()
});


Then(/^Verify that the filter tags are applied (.*)$/, async (text) => {
    await homePage.filtersApplied.isDisplayed();
    await searchPage.waitForPageToLoad();
});

Given(/^I click search bar with keyword (.*)$/, async (keyword) => {
    await searchPage.inputItemSearchBar(keyword);
});

When(/^I click (.*) in search category$/, async (category) => {
    await searchPage.selectCategory(category);
	await searchPage.clickButtonSubmit();
});

Then(/^Verify first result match with (.*)$/, async(keyword) => {
	this.firstItemText = await searchPage.getFirstItem();
	const actualText = this.firstItemText.toLowerCase();
	const expectText = keyword.toLowerCase();

    this.containsText = actualText.includes(expectText);
	if (this.containsText) {
		console.log("SearchItem is found", this.firstItemText)
	} else {
		throw new Error("SearchItem is not found")
	}
});


