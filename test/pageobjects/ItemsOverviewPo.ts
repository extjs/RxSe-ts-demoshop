// Ranorex Webtestit Page Object File

import { browser, element, by, ExpectedConditions } from 'protractor';

import { CartPo } from './CartPo';

// Additional data: {"img":"screenshots/fd1fe110-2eb0-7010-929e-2b8b88a4980e.png"}
export class ItemsOverviewPo {
  // Generated elements
  // Additional data: {"img":"screenshots/1d23bf27-e624-0bbe-228a-f77887746aa9.png"}
  private get item1AddToCartButton() { return by.css('[class=\'post-8 product type-product status-publish has-post-thumbnail product_cat-uncategorized first instock downloadable virtual purchasable product-type-simple\'] [data-product_id]'); }
  // Additional data: {"img":"screenshots/dccc74b9-b801-0c86-c707-e97e806b6729.png"}
  private get item2AddToCartButton() { return by.css('[class=\'post-9 product type-product status-publish has-post-thumbnail product_cat-uncategorized  instock shipping-taxable purchasable product-type-simple\'] [data-product_id]'); }
  // Additional data: {"img":"screenshots/d4e1c712-2f83-41a8-9a24-1b7ec8fc5a82.png"}
  private get item3AddToCartButton() { return by.css('[class=\'post-10 product type-product status-publish has-post-thumbnail product_cat-uncategorized last instock downloadable virtual purchasable product-type-simple\'] [data-product_id]'); }
  // Additional data: {"img":"screenshots/d87e94db-6c9e-f969-6925-1a2fc1aa6b73.png"}
  private get item1ViewCartButton() { return by.css('[class=\'post-8 product type-product status-publish has-post-thumbnail product_cat-uncategorized first instock downloadable virtual purchasable product-type-simple\'] [title]'); }
  // Additional data: {"img":"screenshots/70137b21-079a-1fc7-ab1c-d5c9611991e5.png"}
  private get item2ViewCartButton() { return by.css('[class=\'post-9 product type-product status-publish has-post-thumbnail product_cat-uncategorized  instock shipping-taxable purchasable product-type-simple\'] [title]'); }
  // Additional data: {"img":"screenshots/a51c6f1f-581a-eda0-7f31-34e16b31cfbc.png"}
  private get item3ViewCartButton() { return by.css('[class=\'post-10 product type-product status-publish has-post-thumbnail product_cat-uncategorized last instock downloadable virtual purchasable product-type-simple\'] [title]'); }
  private get blocker() { return by.css('.blockOverlay'); }
  // Additional data: {"img":"screenshots/1d917ae2-1118-4d99-dfb0-68f515f751a4.png"}
  private get amount() { return by.css('#site-header-cart > li:nth-of-type(1) .amount'); }

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
