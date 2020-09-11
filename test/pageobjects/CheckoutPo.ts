// Sencha WebTestIt Page Object File

import { browser, element, by, ExpectedConditions } from 'protractor';

import { ConfirmationPo } from './ConfirmationPo';

// Additional data: {"img":"screenshots/0451edd1-9227-5fe7-a304-df0c4a14b806.png"}
export class CheckoutPo {
  // Generated elements
  // Additional data: {"img":"screenshots/bcd9dcac-3b46-5b59-814e-5c5cbc3bb206.png"}
  private get firstNameField() { return by.css('[autocomplete=\'given-name\']'); }
  // Additional data: {"img":"screenshots/7d5c914d-3f03-a035-3c47-ae5e482f45ea.png"}
  private get secondNameField() { return by.css('[autocomplete=\'family-name\']'); }
  // Additional data: {"img":"screenshots/9fb24b6f-47be-e8cb-b614-c2e77b5c32f1.png"}
  private get emailField() { return by.css('[autocomplete=\'email username\']'); }
  // Additional data: {"img":"screenshots/8510d1fe-1e74-38fe-9128-3ccaa67ff771.png"}
  private get placeOrderButton() { return by.xpath('/html//button[@id=\'place_order\']'); }
  private get blocker() { return by.css('.blockOverlay'); }
  private get blocker2() { return by.css('.blockUI .blockOverlay'); }

  public async open(url: string) {
    await browser.get(url);

    return this;
  }

  // Generated actions
  public async setFirstName(text: string): Promise<CheckoutPo> {
    await browser.wait(ExpectedConditions.visibilityOf(element(this.firstNameField)), browser.allScriptsTimeout, this.firstNameField.toString());
    await element(this.firstNameField).sendKeys(text);

    return this;
  }

  public async setSecondName(text: string): Promise<CheckoutPo> {
    await browser.wait(ExpectedConditions.visibilityOf(element(this.secondNameField)), browser.allScriptsTimeout, this.secondNameField.toString());
    await element(this.secondNameField).sendKeys(text);

    return this;
  }

  public async setEmail(text: string): Promise<CheckoutPo> {
    await browser.wait(ExpectedConditions.visibilityOf(element(this.emailField)), browser.allScriptsTimeout, this.emailField.toString());
    await element(this.emailField).sendKeys(text);

    return this;
  }

  public async placeOrder(): Promise<ConfirmationPo> {
    // The demo shop uses a UI-Overlay to block the user from multiple button clicks,
    // so we wait for the blocker to disappear
    await browser.wait(ExpectedConditions.invisibilityOf(element(this.blocker)), browser.allScriptsTimeout, this.blocker.toString());

    await browser.wait(ExpectedConditions.visibilityOf(element(this.placeOrderButton)), browser.allScriptsTimeout, this.placeOrderButton.toString());
    await element(this.placeOrderButton).click();

    // The demo shop uses a UI-Overlay to block the user from multiple button clicks,
    // so we wait for the blocker to disappear
    await browser.wait(ExpectedConditions.invisibilityOf(element(this.blocker2)), browser.allScriptsTimeout, this.blocker2.toString());

    return new ConfirmationPo();
  }
}
