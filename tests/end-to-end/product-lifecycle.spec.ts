/* eslint-disable playwright/expect-expect */
import { randomUserData } from '@_src/factories/user.factory';
import { expect, test } from '@_src/fixtures/merge.fixture';
import { CheckoutPage } from '@_src/pages/checkout.page';
import { HomePage } from '@_src/pages/home.page';
import { PaymentPage } from '@_src/pages/payment.page';
import { ProductPage } from '@_src/pages/product.page';
import { product1 } from '@_src/test-data/product.data';
import { customerUser1 } from '@_src/test-data/user.data';

test.describe('Select, add to cart and buy product', () => {
  let homePage: HomePage;
  let productPage: ProductPage;
  let checkoutPage: CheckoutPage;
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ loginPage, page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);
    paymentPage = new PaymentPage(page);

    const accountPage = await loginPage.login(customerUser1);
    await accountPage.waitForPageToLoadUrl();
    await homePage.goto();
    await homePage.goToProduct(product1.productName);
  });
  test('user can access single product', async () => {
    // Assert
    await expect(productPage.productName).toHaveText(product1.productName);
  });
  test('user can add product to cart', async () => {
    //Act
    await productPage.addToCartButton.click();

    //Assert
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
  // test('user see information about logged in @logged', async () => {
  //   await productPage.addToCartButton.click();
  //   await productPage.cartIcon.click();
  //   await checkoutPage.proceedToCheckoutButton.click();
  //   const expectedText = `Hello ${await checkoutPage.userNameMenu.textContent()}, you are already logged in. You can proceed to checkout.`;

  //   await expect(checkoutPage.loggedInInformation).toHaveText(expectedText);
  // });

  test('user completes missing data in checkout', async () => {
    //Arrange
    const registerUserData = randomUserData();

    //Act
    await productPage.addToCartButton.click();
    await productPage.cartIcon.click();

    await expect
      .soft(checkoutPage.productName)
      .toHaveText(product1.productName);
    await checkoutPage.proceedToCheckoutButtonCart.click();
    await checkoutPage.proceedToCheckoutButtonSignIn.click();
    await checkoutPage.stateInput.fill(registerUserData.userState);
    await checkoutPage.postcodeInput.fill(registerUserData.userPostcode);
    await checkoutPage.proceedToCheckoutButtonAddress.click();

    //Assert
    await expect(paymentPage.paymentMethodList).toBeVisible();
  });

  // test('user add product to favorites', async () => {
  //   await productPage.addToFavoritesButton.click();

  //   await expect(productPage.addProductToFavoritesPopUp).toBeVisible();
  //   await accountPage.goToUrl('favorites');
  //   await accountPage.deleteIcon.click();
  // });
});
