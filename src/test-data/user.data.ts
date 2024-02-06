import {
  ADMIN_EMAIL,
  CUSTOMER_1_EMAIL,
  CUSTOMER_2_EMAIL,
  USER_PASSWORD,
} from '@_config/env.config';
import { LoginUserModel } from '@_src/models/user.model';

export const adminUser: LoginUserModel = {
  userEmail: ADMIN_EMAIL ?? '[NOT SET]',
  userPassword: USER_PASSWORD ?? '[NOT SET]',
};

export const customerUser1: LoginUserModel = {
  userEmail: CUSTOMER_1_EMAIL,
  userPassword: USER_PASSWORD ?? '[NOT SET]',
};

export const customerUser2: LoginUserModel = {
  userEmail: CUSTOMER_2_EMAIL,
  userPassword: USER_PASSWORD ?? '[NOT SET]',
};

export const customerUser1FullName = 'Jane Doe';
