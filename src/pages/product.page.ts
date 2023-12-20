import { BasePage } from './base.page';
import { MainMenuComponent } from '@_src/components/main-menu.component';
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
  addProductToFavoritesPopUp = this.page.getByText('Product added to your');

  constructor(page: Page) {
    super(page);
  }
}
