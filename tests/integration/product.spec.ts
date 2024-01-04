import { expect, test } from '@_src/fixtures/merge.fixture';
import { AccountPage } from '@_src/pages/account.page';
import { HomePage } from '@_src/pages/home.page';
import { ProductPage } from '@_src/pages/product.page';
import { product1 } from '@_src/test-data/product.data';
import { customerUser1 } from '@_src/test-data/user.data';

test.describe('Select, add to cart and buy product', () => {
  let homePage: HomePage;
  let productPage: ProductPage;
  let accountPage: AccountPage;

  test.beforeEach(async ({ loginPage, page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    accountPage = new AccountPage(page);

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
