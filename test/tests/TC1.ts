// Ranorex Webtestit Test File

import { browser } from 'protractor';

import { ItemsOverviewPo } from '../pageobjects/ItemsOverviewPo';
import { HeaderPo } from '../pageobjects/HeaderPo';

describe('checkout', () => {
  beforeEach(() => {
    // Make sure to set the ignoreSynchronization for every testrun for non Angular applications
    browser.ignoreSynchronization = true;
  });

  it('total amount using 3 items', async () => {
    // Open the page
    const overview = await new ItemsOverviewPo().open('https://demoshop.webtestit.com/');

    // Add items to the cart
    await overview.addItem1ToCart();
    await overview.addItem2ToCart();
    await overview.addItem3ToCart();

    // Perform checkout
    const checkout = await new HeaderPo().proceedToCheckout();

    // Fill out form
    await checkout.setFirstName('Chuck');
    await checkout.setSecondName('Norris');
    await checkout.setEmail('chuck.norries@test.com');

    // Place order
    const confirmation = await checkout.placeOrder();

    // Assert that the ordered amount is correct
    await expect(await confirmation.getTotalAmount()).toBe('€3,700.00');
  });

  it('total amount using 1 items', async () => {
    // Open the page
    const overview = await new ItemsOverviewPo().open('https://demoshop.webtestit.com/');

    // Add item to the cart
    await overview.addItem1ToCart();

    // Perform checkout
    const checkout = await new HeaderPo().proceedToCheckout();

    // Fill out form
    await checkout.setFirstName('Chuck');
    await checkout.setSecondName('Norris');
    await checkout.setEmail('chuck.norries@test.com');

    // Place order
    const confirmation = await checkout.placeOrder();

    // Assert that the ordered amount is correct
    await expect(await confirmation.getTotalAmount()).toBe('€1,500.00');
  });
});
