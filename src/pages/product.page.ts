import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class ProductPage extends BasePage {
  productName = this.page.locator('[data-test="product-name"]');
  constructor(page: Page) {
    super(page);
  }
}
