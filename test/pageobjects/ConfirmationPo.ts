// Ranorex Webtestit Page Object File

import { browser, element, by, ExpectedConditions } from 'protractor';

// Additional data: {"img":"screenshots/4899bd72-484f-7466-15d2-eb2d4339310d.png"}
export class ConfirmationPo {
  // Generated elements
  private get totalAmount() { return by.css('.woocommerce-order ul .woocommerce-Price-amount'); }

  public async open(url: string) {
    await browser.get(url);

    return this;
  }

  // Generated actions
  public async getTotalAmount(): Promise<string> {
    // The demo shop redirects via http to the confirmation page,
    // so we wait for presence of the element to appear
    await browser.wait(ExpectedConditions.presenceOf(element(this.totalAmount)), browser.allScriptsTimeout, this.totalAmount.toString());

    await browser.wait(ExpectedConditions.visibilityOf(element(this.totalAmount)), browser.allScriptsTimeout, this.totalAmount.toString());

    const totalAmountText = await element(this.totalAmount).getText();

    return totalAmountText;
  }
}
