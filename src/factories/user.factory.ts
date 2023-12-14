import { RegisterUserModel } from '../models/user.model';
import { faker } from '@faker-js/faker/locale/en';

export function randomUserData(): RegisterUserModel {
  const registerUserData: RegisterUserModel = {
    userFirstName: faker.person.firstName().replace(/[^A-Za-z]/g, ''),
    userLastName: faker.person.lastName().replace(/[^A-Za-z]/g, ''),
    userEmail: '',
    userPassword: faker.internet.password(),
    userDateOfBirth: faker.date.birthdate({ min: 18, max: 65 }),
    userAddress: faker.location.streetAddress(),
    userPostcode: faker.location.zipCode(),
    userCity: faker.location.city(),
    userState: faker.location.state(),
    userCountry: faker.location.country(),
    userPhone: faker.string.numeric(9),
  };

  registerUserData.userEmail = faker.internet.email({
    firstName: registerUserData.userFirstName,
    lastName: registerUserData.userLastName,
  });

  return registerUserData;
}
