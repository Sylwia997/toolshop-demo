import { LoginUserModel } from '../models/user.model';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  url = '#/auth/login';
  userEmailInput = this.page.locator('[data-test="email"]');
  userPasswordInput = this.page.locator('[data-test="password"]');
  loginButton = this.page.locator('[data-test="login-submit"]');
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async login(loginUserData: LoginUserModel): Promise<void> {
    await this.userEmailInput.fill(loginUserData.userEmail);
    await this.userPasswordInput.fill(loginUserData.userPassword);
    await this.loginButton.click();
  }
}
