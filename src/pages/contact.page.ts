import { BasePage } from './base.page';
import { ContactFormModel } from '@_src/models/user.model';
import { Page } from '@playwright/test';

import path = require('path');

export class ContactPage extends BasePage {
  url = '#/contact';

  firstNameInput = this.page.locator('[data-test="first-name"]');
  lastNameInput = this.page.locator('[data-test="last-name"]');
  emailInput = this.page.locator('[data-test="email"]');
  subjectDropdownList = this.page.locator('[data-test="subject"]');
  messageInput = this.page.locator('[data-test="message"]');
  attachmentInput = this.page.locator('[data-test="attachment"]');
  sendButton = this.page.locator('[data-test="contact-submit"]');

  constructor(page: Page) {
    super(page);
  }
  async fillContactForm(contactFormData: ContactFormModel): Promise<void> {
    await this.firstNameInput.fill(contactFormData.firstName);
    await this.lastNameInput.fill(contactFormData.lastName);
    await this.emailInput.fill(contactFormData.userEmail);
    await this.subjectDropdownList.selectOption(contactFormData.subject);
    await this.messageInput.fill(contactFormData.message);
    await this.attachmentInput.setInputFiles(
      path.join(__dirname, 'test_file.txt'),
    );
    await this.sendButton.click();
  }
}
