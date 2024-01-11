import { randomContactFormData } from '@_src/factories/contact.factory';
import { expect, test } from '@_src/fixtures/merge.fixture';
import { ContactPage } from '@_src/pages/contact.page';
import {
  customerUser1,
  customerUser1FullName,
} from '@_src/test-data/user.data';

test.describe('Sending a contact form by logged in and not logged in user', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
  });
  test('Sending a contact form by a logged in user', async ({ loginPage }) => {
    //Arrange
    const expectedSuccessMessage =
      ' Thanks for your message! We will contact you shortly. ';
    const expectedWelcomeMessage = `Hello ${customerUser1FullName}, please fill out this form to submit your message.`;

    //Act
    await loginPage.login(customerUser1);
    await contactPage.goto();
    await expect
      .soft(contactPage.textInform)
      .toHaveText(expectedWelcomeMessage);
    await contactPage.fillContactFormByLoggedInUser(randomContactFormData());

    //Assert
    await expect(contactPage.alertMessage).toHaveText(expectedSuccessMessage);
  });
  test('Sending a contact form by a not logged in user', async ({}) => {
    //Arrange
    const expectedSuccessMessage =
      ' Thanks for your message! We will contact you shortly. ';

    //Act
    await contactPage.goto();
    await contactPage.fillContactFormByUnloggedUser(randomContactFormData());

    //Assert
    await expect(contactPage.alertMessage).toHaveText(expectedSuccessMessage);
  });
});
