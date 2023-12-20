/* eslint-disable playwright/expect-expect */
import { randomUserData } from '@_src/factories/user.factory';
import { AccountPage } from '@_src/pages/account.page';
import { CheckoutPage } from '@_src/pages/checkout.page';
import { HomePage } from '@_src/pages/home.page';
import { LoginPage } from '@_src/pages/login.page';
import { ProductPage } from '@_src/pages/product.page';
import { product1 } from '@_src/test-data/product.data';
import { customerUser1 } from '@_src/test-data/user.data';
import test, { expect } from '@playwright/test';

test.describe('Select, add to cart and buy product', () => {
  let homePage: HomePage;
  let productPage: ProductPage;
  let checkoutPage: CheckoutPage;
  let loginPage: LoginPage;
  let accountPage: AccountPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);
    loginPage = new LoginPage(page);
    accountPage = new AccountPage(page);

    await loginPage.goto();
    await loginPage.login(customerUser1);
    await accountPage.waitForPageToLoadUrl();
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

    //Assert
    await expect(checkoutPage.totalProductPrice).toContainText(
      totalCartPrice.toString(),
    );
  });
  test('user see information about logged in', async () => {
    await checkoutPage.proceedToCheckoutButton.click();
    const expectedText = `Hello ${await checkoutPage.userNameMenu.textContent()}, you are already logged in. You can proceed to checkout.`;

    await expect(checkoutPage.loggedInInformation).toHaveText(expectedText);
  });

  test('user completes missing data in checkout', async () => {
    const registerUserData = randomUserData();

    await productPage.addToCartButton.click();
    await productPage.cartIcon.click();

    await expect
      .soft(checkoutPage.productName)
      .toHaveText(product1.productName);
    await checkoutPage.proceedToCheckoutButton.click();
    await checkoutPage.proceedToCheckoutButton.click();

    await checkoutPage.stateInput.fill(registerUserData.userState);
    await checkoutPage.postcodeInput.fill(registerUserData.userPostcode);
    await checkoutPage.proceedToCheckoutButton.click();
  });
  test('user add product to favorites', async () => {
    await productPage.addToFavoritesButton.click();

    await expect(productPage.addProductToFavoritesPopUp).toBeVisible();
  });
});
