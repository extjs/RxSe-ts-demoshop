// Ranorex Webtestit Page Object File

import { browser, element, by, ExpectedConditions } from 'protractor';

import { CheckoutPo } from './CheckoutPo';

// Additional data: {"img":"screenshots/76527516-6b60-53a5-23ab-1b4b5fc4043a.png"}
export class HeaderPo {
  // Generated elements
  // Additional data: {"img":"screenshots/d96e46f7-33e4-6c35-d06b-813a72272293.png"}
  private get checkOutButton() { return by.css('.nav-menu [href=\'https\\:\\/\\/demoshop\\.webtestit\\.com\\/checkout\\/\']'); }

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
