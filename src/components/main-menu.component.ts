import { LoginPage } from '@_src/pages/login.page';
import { Page } from '@playwright/test';

export class MainMenuComponent {
  homeButton = this.page.locator('[data-test="nav-home"]');
  categoriesDropdownList = this.page.locator('[data-test="nav-categories"]');
  contactButton = this.page.locator('[data-test="nav-contact"]');
  signInButton = this.page.locator('[data-test="nav-sign-in"]');
  userName = this.page.locator('[data-test="nav-user-menu"]');

  constructor(private page: Page) {}

  async clickSignInButton(): Promise<LoginPage> {
    await this.signInButton.click();
    return new LoginPage(this.page);
  }
}
