// Ranorex Webtestit Page Object File

import { browser, element, by, ExpectedConditions } from 'protractor';

import { CheckoutPo } from './CheckoutPo';

export class HeaderPo {
  // Generated elements
  private get checkOutButton() { return by.css('#site-navigation .menu:nth-child(2) [href="https\:\/\/demoshop\.webtestit\.com\/checkout\/"]'); }

  public async open(url: string) {
    await browser.get(url);

    return this;
  }

  // Generated actions
  public async proceedToCheckout(): Promise<CheckoutPo> {
    await browser.wait(ExpectedConditions.visibilityOf(element(this.checkOutButton)), browser.allScriptsTimeout, this.checkOutButton.toString());
    await element(this.checkOutButton).click();

    return new CheckoutPo();
  }
}
