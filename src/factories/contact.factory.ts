import { ContactFormModel } from '@_src/models/user.model';
import { faker } from '@faker-js/faker/locale/en';

export function randomContactFormData(): ContactFormModel {
  const contactFormData: ContactFormModel = {
    firstName: faker.person.firstName().replace(/[^A-Za-z]/g, ''),
    lastName: faker.person.lastName().replace(/[^A-Za-z]/g, ''),
    userEmail: '',
    subject: 'Customer service',
    message: faker.lorem.sentences(),
    attachment: 'testowa grafika biura.png',
  };

  contactFormData.userEmail = faker.internet.email({
    firstName: contactFormData.firstName,
    lastName: contactFormData.lastName,
  });
  return contactFormData;
}
