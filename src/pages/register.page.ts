import { formatDateForRegister } from '../helpers/date.helper';
import { RegisterUserModel } from '../models/user.model';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class RegisterPage extends BasePage {
  url = '#/auth/register';

  userFirstNameInput = this.page.locator('[data-test="first-name"]');
  userLastNameInput = this.page.locator('[data-test="last-name"]');
  userDateOfBirthInput = this.page.locator('[data-test="dob"]');
  userAddressInput = this.page.locator('[data-test="address"]');
  userPostcodeInput = this.page.locator('[data-test="postcode"]');
  userCityInput = this.page.locator('[data-test="city"]');
  userStateInput = this.page.locator('[data-test="state"]');
  userCountryInput = this.page.locator('[data-test="country"]');
  userPhoneInput = this.page.locator('[data-test="phone"]');
  userEmailInput = this.page.locator('[data-test="email"]');
  userPasswordInput = this.page.locator('[data-test="password"]');
  registerButton = this.page.locator('[data-test="register-submit"]');

  alertPopup = this.page.getByTestId('alert-popup');

  constructor(page: Page) {
    super(page);
  }

  async register(registerUserData: RegisterUserModel): Promise<void> {
    const userDateOfBirth = formatDateForRegister(
      registerUserData.userDateOfBirth,
    );

    await this.userFirstNameInput.fill(registerUserData.userFirstName);
    await this.userLastNameInput.fill(registerUserData.userLastName);
    await this.userDateOfBirthInput.fill(userDateOfBirth);
    await this.userAddressInput.fill(registerUserData.userAddress);
    await this.userPostcodeInput.fill(registerUserData.userPostcode);
    await this.userCityInput.fill(registerUserData.userCity);
    await this.userStateInput.fill(registerUserData.userState);
    await this.userCountryInput.selectOption(registerUserData.userCountry);
    await this.userPhoneInput.fill(registerUserData.userPhone);
    await this.userEmailInput.fill(registerUserData.userEmail);
    await this.userPasswordInput.fill(registerUserData.userPassword);
    await this.registerButton.click();
  }
}
