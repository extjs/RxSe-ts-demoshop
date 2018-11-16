// Ranorex Webtestit Page Object File

import { browser, element, by, ExpectedConditions } from 'protractor';

import { CartPo } from './CartPo';

export class ItemsOverviewPo {
  // Generated elements
  private get item1AddToCartButton() { return by.css('[href="\/\?add-to-cart\=8"]'); }
  private get item2AddToCartButton() { return by.css('[href="\/\?add-to-cart\=9"]'); }
  private get item3AddToCartButton() { return by.css('[href="\/\?add-to-cart\=10"]'); }
  private get item1ViewCartButton() { return by.css('[class="post-8 product type-product status-publish has-post-thumbnail product_cat-uncategorized first instock downloadable virtual purchasable product-type-simple"] .added_to_cart'); }
  private get item2ViewCartButton() { return by.css('[class="post-9 product type-product status-publish has-post-thumbnail product_cat-uncategorized  instock shipping-taxable purchasable product-type-simple"] .added_to_cart'); }
  private get item3ViewCartButton() { return by.css('[class="post-10 product type-product status-publish has-post-thumbnail product_cat-uncategorized last instock downloadable virtual purchasable product-type-simple"] .added_to_cart'); }
  private get blocker() { return by.css('.blockOverlay'); }
  private get amount() { return by.css('.cart-contents .amount'); }

  public async open(url: string) {
    await browser.get(url);

    return this;
  }

  // Generated actions
  public async addItem1ToCart(): Promise<ItemsOverviewPo> {
    // The demo shop uses ajax calls to update the page,
    // so we get the amount text to check later if it changed
    await browser.wait(ExpectedConditions.visibilityOf(element(this.amount)), browser.allScriptsTimeout, this.amount.toString());
    const value = await element(this.amount).getText();

    await browser.wait(ExpectedConditions.visibilityOf(element(this.item1AddToCartButton)), browser.allScriptsTimeout, this.item1AddToCartButton.toString());
    await element(this.item1AddToCartButton).click();

    // The demo shop uses a UI-Overlay to block the user from multiple button clicks,
    // so we wait for the blocker to disappear
    await browser.wait(ExpectedConditions.invisibilityOf(element(this.blocker)), browser.allScriptsTimeout, this.blocker.toString());

    // The demo shop uses ajax calls to update the page,
    // so we wait for the amount text to change
    await browser.wait(ExpectedConditions.not(ExpectedConditions.textToBePresentInElement(element(this.amount), value)), browser.allScriptsTimeout, this.amount.toString());

    return this;
  }

  public async addItem2ToCart(): Promise<ItemsOverviewPo> {
    // The demo shop uses ajax calls to update the page,
    // so we get the amount text to check later if it changed
    await browser.wait(ExpectedConditions.visibilityOf(element(this.amount)), browser.allScriptsTimeout, this.amount.toString());
    const value = await element(this.amount).getText();

    await browser.wait(ExpectedConditions.visibilityOf(element(this.item2AddToCartButton)), browser.allScriptsTimeout, this.item2AddToCartButton.toString());
    await element(this.item2AddToCartButton).click();

    // The demo shop uses a UI-Overlay to block the user from multiple button clicks,
    // so we wait for the blocker to disappear
    await browser.wait(ExpectedConditions.invisibilityOf(element(this.blocker)), browser.allScriptsTimeout, this.blocker.toString());

    // The demo shop uses ajax calls to update the page,
    // so we wait for the amount text to change
    await browser.wait(ExpectedConditions.not(ExpectedConditions.textToBePresentInElement(element(this.amount), value)), browser.allScriptsTimeout, this.amount.toString());

    return this;
  }

  public async addItem3ToCart(): Promise<ItemsOverviewPo> {
    // The demo shop uses ajax calls to update the page,
    // so we get the amount text to check later if it changed
    await browser.wait(ExpectedConditions.visibilityOf(element(this.amount)), browser.allScriptsTimeout, this.amount.toString());
    const value = await element(this.amount).getText();

    await browser.wait(ExpectedConditions.visibilityOf(element(this.item3AddToCartButton)), browser.allScriptsTimeout, this.item3AddToCartButton.toString());
    await element(this.item3AddToCartButton).click();

    // The demo shop uses a UI-Overlay to block the user from multiple button clicks,
    // so we wait for the blocker to disappear
    await browser.wait(ExpectedConditions.invisibilityOf(element(this.blocker)), browser.allScriptsTimeout, this.blocker.toString());

    // The demo shop uses ajax calls to update the page,
    // so we wait for the amount text to change
    await browser.wait(ExpectedConditions.not(ExpectedConditions.textToBePresentInElement(element(this.amount), value)), browser.allScriptsTimeout, this.amount.toString());

    return this;
  }

  public async clickOnCart(): Promise<CartPo> {
    await browser.wait(ExpectedConditions.visibilityOf(element(this.item3ViewCartButton)), browser.allScriptsTimeout, this.item3AddToCartButton.toString());
    await element(this.item3ViewCartButton).click();

    // The demo shop uses a UI-Overlay to block the user from multiple button clicks,
    // so we wait for the blocker to disappear
    await browser.wait(ExpectedConditions.invisibilityOf(element(this.blocker)), browser.allScriptsTimeout, this.blocker.toString());

    return new CartPo();
  }
}
