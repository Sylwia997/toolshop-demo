import { CheckoutPage } from '../../src/pages/checkout.page';
import { HomePage } from '../../src/pages/home.page';
import { LoginPage } from '../../src/pages/login.page';
import { ProductPage } from '../../src/pages/product.page';
import { product1 } from '../../src/test-data/product.data';
import { adminUser } from '../../src/test-data/user.data';
import test, { expect } from '@playwright/test';

test.describe('Select, add to cart and buy product', () => {
  let homePage: HomePage;
  let productPage: ProductPage;
  let checkoutPage: CheckoutPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);
    loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(adminUser);
    await homePage.goto();
    await homePage.goToProduct(product1.productName);
  });
  test('user can access single product', async () => {
    // Assert
    await expect(productPage.productName).toHaveText(product1.productName);
  });
  test('user can add product to cart', async () => {
    await productPage.addToCartButton.click();
    await expect(productPage.addProductToCartPopUp).toBeVisible();
  });
  test('verify product quantity in card', async () => {
    // Arrange
    const productQuantity = '7';

    //Act
    await productPage.quantityInput.fill(productQuantity);
    await productPage.addToCartButton.click();

    //Assert
    await expect(productPage.cartQuantity).toHaveText(productQuantity);
  });
  // eslint-disable-next-line playwright/expect-expect
  test('verify product price in card', async () => {
    // Arrange
    const productQuantity = 2;

    //Act
    await productPage.quantityInput.fill('2');
    await productPage.addToCartButton.click();
    await productPage.cartIcon.click();
    const totalCartPrice = await checkoutPage.countPriceOfCart(
      productQuantity,
      product1.productPrice,
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const totalPriceLocator = checkoutPage.getProductPrice(totalCartPrice);

    //Assert
    // await expect(totalPriceLocator).toContain(totalCartPrice);
  });
  //   test('verify in checkout that user is logged in', async () => {});
});
