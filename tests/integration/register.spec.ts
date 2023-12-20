/* eslint-disable playwright/expect-expect */
import { randomUserData } from '@_src/factories/user.factory';
import { LoginPage } from '@_src/pages/login.page';
import { RegisterPage } from '@_src/pages/register.page';
import { expect, test } from '@playwright/test';

test.describe('Verify register', () => {
  test('register with correct data and login', async ({ page }) => {
    // Arrange
    const registerUserData = randomUserData();
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);

    // Act
    await registerPage.goto();
    await registerPage.register(registerUserData);

    // Assert
    await expect.soft(loginPage.headingTitle).toBeVisible();

    await loginPage.login({
      userEmail: registerUserData.userEmail,
      userPassword: registerUserData.userPassword,
    });
  });
});
