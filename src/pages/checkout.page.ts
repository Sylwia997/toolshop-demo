import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class CheckoutPage extends BasePage {
  url = '#/checkout';
  proceedToCheckoutButton = this.page.locator('.btn-success');
  totalProductPrice = this.page.getByText('$').nth(1);
  productName = this.page.locator('.product-title');
  productQuantity = this.page.locator('.form-control quantity');
  totalCartPrice = this.page.locator('tfoot').getByRole('cell', { name: '$' });
  userNameMenu = this.page.locator('#user-menu');
  stateInput = this.page.locator('#state');
  postcodeInput = this.page.locator('#postcode');
  loggedInInformation = this.page.locator('.col-md-6 offset-md-3 login-form-1');

  constructor(page: Page) {
    super(page);
  }
  async getProductPrice(price: number): Promise<void> {
    this.page.locator('span').filter({ hasText: `${price}` });
  }

  async countPriceOfCart(
    productQuantity: number,
    productPrice: number,
  ): Promise<number> {
    return productQuantity * productPrice;
  }
}
