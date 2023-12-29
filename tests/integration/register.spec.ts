/* eslint-disable playwright/expect-expect */
import { randomUserData } from '@_src/factories/user.factory';
import { expect, test } from '@_src/fixtures/merge.fixture';

test.describe('Verify register', () => {
  test('register with correct data and login', async ({
    registerPage,
    loginPage,
  }) => {
    // Arrange
    const registerUserData = randomUserData();

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
