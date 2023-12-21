import {
  BankTransferPaymentModel,
  CreditCardPaymentModel,
  GiftCardPaymentModel,
} from '@_src/models/payment.model';
import { faker } from '@faker-js/faker/locale/en';

export function randomBankTransferPaymentData(): BankTransferPaymentModel {
  const bankTransferPaymentData: BankTransferPaymentModel = {
    bankName: 'BNP PARIBAS',
    accountName: faker.finance.accountName(),
    accountNumber: faker.finance.accountNumber(),
  };

  return bankTransferPaymentData;
}
export function randomCreditCardPaymentData(): CreditCardPaymentModel {
  const creditCardPaymentData: CreditCardPaymentModel = {
    creditCartNumber: faker.finance.creditCardNumber('63[7-9]#-####-####-###L'),
    expirationDate: faker.date.future(),
    cvv: faker.finance.creditCardCVV(),
    cardHolderName: faker.person.firstName().replace(/[^A-Za-z]/g, ''),
  };
  return creditCardPaymentData;
}
export function randomGiftCardPaymentData(): GiftCardPaymentModel {
  const giftCardPaymentData: GiftCardPaymentModel = {
    giftCardNumber: faker.finance.bic(),
    validationCode: faker.finance.bic(),
  };
  return giftCardPaymentData;
}
