import { PaymentProcessor } from "./PaymentProcessor";

export abstract class PaymentOnline extends PaymentProcessor {
  abstract processPayment(amount: number): void;
}
