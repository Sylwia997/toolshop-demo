import { LoginUserModel } from '@_src/models/user.model';

export const adminUser: LoginUserModel = {
  userEmail: process.env.ADMIN_EMAIL ?? '[NOT SET]',
  userPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
};

export const customerUser1: LoginUserModel = {
  userEmail: 'customer@practicesoftwaretesting.com',
  userPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
};

export const customerUser2: LoginUserModel = {
  userEmail: 'customer2@practicesoftwaretesting.com',
  userPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
};
