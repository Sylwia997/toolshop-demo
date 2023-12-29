export interface RegisterUserModel {
  userFirstName: string;
  userLastName: string;
  userDateOfBirth: Date;
  userAddress: string;
  userPostcode: string;
  userCity: string;
  userState: string;
  userCountry: string;
  userPhone: string;
  userEmail: string;
  userPassword: string;
}
export interface LoginUserModel {
  userEmail: string;
  userPassword: string;
}

export interface ContactFormModel {
  firstName: string;
  lastName: string;
  userEmail: string;
  subject: string;
  message: string;
  attachment: string;
}
