// Ranorex Webtestit Page Object File

import { browser, element, by, ExpectedConditions } from 'protractor';

import { CartPo } from './CartPo';
import { CheckoutPo } from './CheckoutPo';

export class ShoppingCartPo {
  // Generated elements
  private get viewCartButton() { return by.css('.woocommerce-mini-cart__buttons .wc-forward:nth-of-type(1)'); }
  private get checkOutButton() { return by.css('.checkout'); }

  public async open(url: string) {
    await browser.get(url);

    return this;
  }

  // Generated actions
  public async clickOnViewCart(): Promise<CartPo> {
    await browser.wait(ExpectedConditions.visibilityOf(element(this.viewCartButton)), browser.allScriptsTimeout, this.viewCartButton.toString());
    await element(this.viewCartButton).click();

    return new CartPo();
  }

  public async clickOnCheckout(): Promise<CheckoutPo> {
    await browser.wait(ExpectedConditions.visibilityOf(element(this.checkOutButton)), browser.allScriptsTimeout, this.checkOutButton.toString());
    await element(this.checkOutButton).click();

    return new CheckoutPo();
  }
}
