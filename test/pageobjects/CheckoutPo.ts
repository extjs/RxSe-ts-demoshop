// Ranorex Webtestit Page Object File

import { browser, element, by, ExpectedConditions } from 'protractor';

import { ConfirmationPo } from './ConfirmationPo';

export class CheckoutPo {
  // Generated elements
  private get firstNameField() { return by.css('#billing_first_name_field [type]'); }
  private get secondNameField() { return by.css('#billing_last_name_field [type]'); }
  private get emailField() { return by.css('[type=\"email\"]'); }
  private get placeOrderButton() { return by.css('.place-order button'); }
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
