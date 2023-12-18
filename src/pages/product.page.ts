import { MainMenuComponent } from '../components/main-menu.component';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class ProductPage extends BasePage {
  mainMenu = new MainMenuComponent(this.page);
  productName = this.page.locator('[data-test="product-name"]');
  productPrice = this.page.locator('[data-test="unit-price"]');
  addToCartButton = this.page.locator('[data-test="add-to-cart"]');
  addToFavoritesButton = this.page.locator('[data-test="add-to-favorites"]');
  addProductToCartPopUp = this.page.getByText('Product added to shopping');
  cartIcon = this.page.locator('[data-test="nav-cart"]');
  cartQuantity = this.page.locator('[data-test="cart-quantity"]');
  quantityInput = this.page.locator('[data-test="quantity"]');

  constructor(page: Page) {
    super(page);
  }
}
