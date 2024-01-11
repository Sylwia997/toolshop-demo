import { BasePage } from './base.page';
import { MainMenuComponent } from '@_src/components/main-menu.component';
import { ContactFormModel } from '@_src/models/user.model';
import { Page } from '@playwright/test';

export class ContactPage extends BasePage {
  url = '#/contact';

  mainMenu = new MainMenuComponent(this.page);
  firstNameInput = this.page.locator('[data-test="first-name"]');
  lastNameInput = this.page.locator('[data-test="last-name"]');
  emailInput = this.page.locator('[data-test="email"]');
  subjectDropdownList = this.page.locator('[data-test="subject"]');
  messageInput = this.page.locator('[data-test="message"]');
  attachmentInput = this.page.locator('[data-test="attachment"]');
  sendButton = this.page.locator('[data-test="contact-submit"]');
  alertMessage = this.page.locator('[class="alert alert-success mt-3"]');
  textInform = this.page.locator('[class="row mb-3"]');

  constructor(page: Page) {
    super(page);
  }
  async fillContactFormByUnloggedUser(
    contactFormData: ContactFormModel,
  ): Promise<void> {
    await this.firstNameInput.fill(contactFormData.firstName);
    await this.lastNameInput.fill(contactFormData.lastName);
    await this.emailInput.fill(contactFormData.userEmail);
    await this.subjectDropdownList.selectOption(contactFormData.subject);
    await this.messageInput.fill(contactFormData.message);
    await this.attachmentInput.setInputFiles(
      '/Users/sylwia/Desktop/test_file.txt',
    ),
      await this.sendButton.click();
  }
  async fillContactFormByLoggedInUser(
    contactFormData: ContactFormModel,
  ): Promise<void> {
    await this.subjectDropdownList.selectOption(contactFormData.subject);
    await this.messageInput.fill(contactFormData.message);
    await this.attachmentInput.setInputFiles(
      '/Users/sylwia/Desktop/test_file.txt',
    ),
      await this.sendButton.click();
  }
}
