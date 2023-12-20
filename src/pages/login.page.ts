import { BasePage } from './base.page';
import { LoginUserModel } from '@_src/models/user.model';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  url = '#/auth/login';
  userEmailInput = this.page.locator('[data-test="email"]');
  userPasswordInput = this.page.locator('[data-test="password"]');
  loginButton = this.page.locator('[data-test="login-submit"]');
  headingTitle = this.page.getByRole('heading', { name: 'Login' });
  constructor(page: Page) {
    super(page);
  }

  async login(loginUserData: LoginUserModel): Promise<void> {
    await this.userEmailInput.fill(loginUserData.userEmail);
    await this.userPasswordInput.fill(loginUserData.userPassword);
    await this.loginButton.click();
  }
}
