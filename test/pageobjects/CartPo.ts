// Sencha WebTestIt Page Object File

import { browser, element, by, ExpectedConditions } from 'protractor';

import { CheckoutPo } from './CheckoutPo';

// Additional data: {"img":"screenshots/f3d0b4c4-827c-4a81-70b6-c3b0855afc85.png"}
export class CartPo {
  // Generated elements
  // Additional data: {"img":"screenshots/0efad871-8090-6020-9625-e2a3e9006491.png"}
  private get checkOutButton() { return by.css('.checkout-button'); }

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
