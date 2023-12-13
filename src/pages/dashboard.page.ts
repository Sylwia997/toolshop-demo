import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class DashboardPage extends BasePage {
  url = '#/admin/dashboard';
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async title(): Promise<string> {
    await this.page.waitForLoadState;
    return await this.page.title();
  }
}
