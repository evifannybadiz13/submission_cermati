const { $ } = require('@wdio/globals')
const BasePage = require('./base.page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {

    open () {
        return super.open('home');
    }

     get shopByCategory () {
        return $("//button[@id='gh-shop-a']");
    }
    

    get allfilters(){
       return $("//button[@class='brm__all-filters fake-link']");
    }

    get popUp(){
        return $("//div[@class='x-overlay__container']");
    }

    get conditionFilter(){
        return $("//span[@class='x-overlay-aspect__label'][contains(.,'Condition')]");
    }

    get priceFilter(){
        return $("//span[@class='x-overlay-aspect__label'][contains(.,'Price')]");
    }

    get itemLocationFilter(){
        return $("//span[@class='x-overlay-aspect__label'][contains(.,'Item Location')]");
    }

    get condition(){
        return $("//span[@class='cbx x-refine__multi-select-cbx'][contains(.,'New')]");
    }

    get priceInput(){
        return $("//input[@class='x-textrange__input x-textrange__input--from']");
    }

    get itemLocation(){
        return $("//input[@aria-label='Asia']");
    }

    get applyButton(){
        return $("//div[@class='x-overlay-footer__apply']");
    }

    get filtersApplied(){
        return $("//span[@class='brm__flyout__btn-label'][contains(.,'3 filters applied')]");
    }

}

module.exports = new HomePage();
