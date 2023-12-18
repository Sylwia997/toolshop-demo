import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class CheckoutPage extends BasePage {
  url = '#/checkout';
  proceedToCheckoutButton = this.page.getByText('Proceed to checkout');
  totalProductPrice = this.page.getByText('$').nth(1);
  productName = this.page.locator('.product-title');
  productQuantity = this.page.locator('.form-control quantity');
  totalCartPrice = this.page.locator('tfoot').getByRole('cell', { name: '$' });

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
