/* eslint-disable playwright/expect-expect */
import { expect, test } from '@_src/fixtures/merge.fixture';
import { LoginUserModel } from '@_src/models/user.model';
import { customerUser1 } from '@_src/test-data/user.data';

test.describe('Verify login', () => {
  test('user login with correct credentials', async ({ loginPage }) => {
    // Arrange
    const expectedAccountPageTitle = 'My account';

    //Act
    const accountPage = await loginPage.login(customerUser1);
    const title = await accountPage.pageTitle.textContent();

    // Assert
    expect(title).toContain(expectedAccountPageTitle);
  });
  test('reject login with incorrect password', async ({ loginPage }) => {
    //Arrange
    const expectedLoginErrorText = 'Invalid email or password';
    const loginUserData: LoginUserModel = {
      userEmail: customerUser1.userEmail,
      userPassword: 'incorrectPassword',
    };

    await loginPage.login(loginUserData);

    //Assert
    await expect(loginPage.loginError).toHaveText(expectedLoginErrorText);
  });
});
