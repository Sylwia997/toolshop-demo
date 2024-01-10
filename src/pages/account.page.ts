import { BasePage } from './base.page';
import { MainMenuComponent } from '@_src/components/main-menu.component';
import { Page } from '@playwright/test';

export class AccountPage extends BasePage {
  url = '#/account';
  deleteIcon = this.page.locator('[data-test="delete"]').first();
  pageTitle = this.page.locator('[data-test="page-title"]');
  mainMenu = new MainMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }
  async goToUrl(url: string): Promise<void> {
    await this.page.goto(`${this.url}/${url}`);
  }
}
