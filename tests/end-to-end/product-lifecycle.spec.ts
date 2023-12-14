import { HomePage } from '../../src/pages/home.page';
import { ProductPage } from '../../src/pages/product.page';
import { product1 } from '../../src/test-data/product.data';
import test, { expect } from '@playwright/test';

test.describe('Select, add to cart and buy product', () => {
  test('user can access single product', async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    // Act
    await homePage.goto();
    await homePage.goToProduct(product1.productName);

    // Assert
    await expect(productPage.productName).toHaveText(product1.productName);
  });
});
