/* eslint-disable playwright/expect-expect */
import {
  randomBankTransferPaymentData,
  randomCreditCardPaymentData,
  randomGiftCardPaymentData,
} from '@_src/factories/payment.factory';
import { randomUserData } from '@_src/factories/user.factory';
import { AccountPage } from '@_src/pages/account.page';
import { CheckoutPage } from '@_src/pages/checkout.page';
import { HomePage } from '@_src/pages/home.page';
import { LoginPage } from '@_src/pages/login.page';
import { PaymentPage } from '@_src/pages/payment.page';
import { ProductPage } from '@_src/pages/product.page';
import { product1 } from '@_src/test-data/product.data';
import { customerUser1 } from '@_src/test-data/user.data';
import test, { expect } from '@playwright/test';

test.describe('Payment tests', () => {
  let homePage: HomePage;
  let productPage: ProductPage;
  let checkoutPage: CheckoutPage;
  let loginPage: LoginPage;
  let accountPage: AccountPage;
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);
    loginPage = new LoginPage(page);
    accountPage = new AccountPage(page);
    paymentPage = new PaymentPage(page);
    const registerUserData = randomUserData();

    await loginPage.goto();
    await loginPage.login(customerUser1);
    await accountPage.waitForPageToLoadUrl();
    await homePage.goto();
    await homePage.goToProduct(product1.productName);
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
  });

  test('user can make payment by bank transfer', async () => {
    //Arrange

    const bankTransferPaymentData = randomBankTransferPaymentData();
    //Act
    await paymentPage.setBankTransferPaymentData(bankTransferPaymentData);
    await paymentPage.confirmButton.click();
    await expect(paymentPage.successfulPaymentAlert).toBeVisible();
  });
  test('user can make payment by credit card', async () => {
    //Arrange

    const creditCardPaymentData = randomCreditCardPaymentData();
    //Act

    await paymentPage.setCreditCartPaymentData(creditCardPaymentData);
    await paymentPage.confirmButton.click();
    await expect(paymentPage.successfulPaymentAlert).toBeVisible();
  });
  test('user can make payment by gift card', async () => {
    //Arrange
    const giftCardPaymentData = randomGiftCardPaymentData();
    //Act
    await paymentPage.setGiftCardPaymentData(giftCardPaymentData);
    await paymentPage.confirmButton.click();
    await expect(paymentPage.successfulPaymentAlert).toBeVisible();
  });
});
