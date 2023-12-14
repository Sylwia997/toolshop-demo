import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class DashboardPage extends BasePage {
  url = '#/admin/dashboard';
  constructor(page: Page) {
    super(page);
  }
}
