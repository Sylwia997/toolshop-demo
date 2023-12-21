export interface BankTransferPaymentModel {
  bankName: string;
  accountName: string;
  accountNumber: string;
}
export interface CreditCardPaymentModel {
  creditCartNumber: string;
  expirationDate: Date;
  cvv: string;
  cardHolderName: string;
}
export interface GiftCardPaymentModel {
  giftCardNumber: string;
  validationCode: string;
}
