/* eslint-disable playwright/expect-expect */
import { DashboardPage } from '@_src/pages/dashboard.page';
import { LoginPage } from '@_src/pages/login.page';
import { customerUser1 } from '@_src/test-data/user.data';
import test, { expect } from '@playwright/test';

test.describe('Verify login', () => {
  test('login with correct credentials', async ({ page }) => {
    // Arrange
    const expectedDashboardTitle =
      'Practice Software Testing - Toolshop - v5.0';
    const dashboardPage = new DashboardPage(page);
    const loginPage = new LoginPage(page);

    // Act
    await loginPage.goto();
    await loginPage.login(customerUser1);

    const title = await dashboardPage.getTitle();

    // Assert
    expect(title).toContain(expectedDashboardTitle);
  });
});
