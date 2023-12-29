import { AccountPage } from '@_src/pages/account.page';
import { HomePage } from '@_src/pages/home.page';
import { LoginPage } from '@_src/pages/login.page';
import { ProductPage } from '@_src/pages/product.page';
import { product1 } from '@_src/test-data/product.data';
import { customerUser1 } from '@_src/test-data/user.data';
import test, { expect } from '@playwright/test';

test.describe('Select, add to cart and buy product', () => {
  let homePage: HomePage;
  let productPage: ProductPage;
  let loginPage: LoginPage;
  let accountPage: AccountPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    loginPage = new LoginPage(page);
    accountPage = new AccountPage(page);

    await loginPage.goto();
    await loginPage.login(customerUser1);
    await accountPage.waitForPageToLoadUrl();
    await homePage.goto();
    await homePage.goToProduct(product1.productName);
  });

  test('user add product to favorites', async () => {
    await productPage.addToFavoritesButton.click();

    await expect(productPage.addProductToFavoritesPopUp).toBeVisible();
    await accountPage.goToUrl('favorites');
    await accountPage.deleteIcon.click();
  });
});
