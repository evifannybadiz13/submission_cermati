const { $ } = require('@wdio/globals')
const BasePage = require('./base.page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends BasePage {

    get searchBar() {
        return $("//input[@placeholder='Search for anything']");
    }

    get category() {
        return $("#gh-cat");
    }

    get buttonSubmit() {
        return $("//input[@value='Search']");
    }

    get searchResultFirstItem() {
        return $("//ul[contains(@class, 'srp-results')]//*[@data-view='mi:1686|iid:1']");
    }

    async selectCategory (categoryItem){
        const category = this.category;
        await category.selectByVisibleText(categoryItem);
    }

    async clickButtonSubmit(){
        await this.buttonSubmit.click();
        await this.waitForPageToLoad(); 
    }

    async waitForPageToLoad() {
        await browser.waitUntil(
          async () => {
            return (await browser.execute(() => document.readyState)) === 'complete';
          },
          {
            timeout: 10000,
            timeoutMsg: 'Page did not load completely in time'
          }
        );
    }

    async inputItemSearchBar (keyword){
        await this.searchBar.setValue(keyword);
    }

    async getFirstItem(){
        // await this.searchResultFirstItem.scrollIntoView();
        console.log("aku",this.searchResultFirstItem.getText());
        if (await this.searchResultFirstItem.isDisplayed()) {
            return await this.searchResultFirstItem.getText();
        } else {
            throw new Error('Element is not found');
        }
    }

}

module.exports = new SearchPage();