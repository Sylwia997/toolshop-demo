import { BasePage } from './base.page';
import { formatDateForCartValidation } from '@_src/helpers/date.helper';
import {
  BankTransferPaymentModel,
  CreditCardPaymentModel,
  GiftCardPaymentModel,
} from '@_src/models/payment.model';
import { Page } from '@playwright/test';

export class PaymentPage extends BasePage {
  paymentMethodList = this.page.locator('[data-test="payment-method"]');
  bankNameInput = this.page.getByPlaceholder('Bank Name');
  accountNameInput = this.page.getByPlaceholder('Account Name');
  accountNumberInput = this.page.getByPlaceholder('Account Number');
  confirmButton = this.page.locator('[data-test="finish"]');
  creditCardNumberInput = this.page.getByPlaceholder('Credit Card Number');
  expirationDateInput = this.page.getByPlaceholder('Expiration Date');
  cvvInput = this.page.getByPlaceholder('CVV');
  cardHolderNameInput = this.page.getByPlaceholder('Card Holder Name');
  monthlyInstallmentsList = this.page.locator(
    '[data-test="monthly_installments"]',
  );
  giftCardNumberInput = this.page.getByPlaceholder('Gift Card Number');
  validationCodeInput = this.page.getByPlaceholder('Validation Code');
  successfulPaymentAlert = this.page
    .locator('div')
    .filter({ hasText: /^Payment was successful$/ })
    .first();
  constructor(page: Page) {
    super(page);
  }

  async setBankTransferPaymentData(
    bankTransferPaymentData: BankTransferPaymentModel,
  ): Promise<void> {
    await this.paymentMethodList.selectOption('Bank Transfer');
    await this.bankNameInput.fill(bankTransferPaymentData.bankName);
    await this.accountNameInput.fill(bankTransferPaymentData.accountName);
    await this.accountNumberInput.fill(bankTransferPaymentData.accountNumber);
  }
  async setCreditCartPaymentData(
    creditCartPaymentData: CreditCardPaymentModel,
  ): Promise<void> {
    const expirationCartDate = formatDateForCartValidation(
      creditCartPaymentData.expirationDate,
    );
    await this.paymentMethodList.selectOption('Credit Card');
    await this.creditCardNumberInput.fill(
      creditCartPaymentData.creditCartNumber,
    );
    await this.expirationDateInput.fill(expirationCartDate);
    await this.cvvInput.fill(creditCartPaymentData.cvv);
    await this.cardHolderNameInput.fill(creditCartPaymentData.cardHolderName);
  }
  async setGiftCardPaymentData(
    giftCardPaymentData: GiftCardPaymentModel,
  ): Promise<void> {
    await this.paymentMethodList.selectOption('Gift Card');
    await this.giftCardNumberInput.fill(giftCardPaymentData.giftCardNumber);
    await this.validationCodeInput.fill(giftCardPaymentData.validationCode);
  }
}
