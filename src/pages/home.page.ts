import { BasePage } from './base.page';
import { MainMenuComponent } from '@_src/components/main-menu.component';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
  url = '#/';
  mainMenu = new MainMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }

  async goToProduct(title: string): Promise<void> {
    await this.page.locator('.card-title').filter({ hasText: title }).click();
  }
}
