import { PaymentOnline } from "./PaymentOnline";

export class PayPalPayment extends PaymentOnline {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    console.log("Redirecting to PayPal...");
    console.log("Completing PayPal transaction...");
  }
}
