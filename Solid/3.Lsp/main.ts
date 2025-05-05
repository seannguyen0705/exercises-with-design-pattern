/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { CashPayment } from "./CashPayment";
import { CreditCardPayment } from "./CreditCardPayment";
import { PaymentOnline } from "./PaymentOnline";
import { PayPalPayment } from "./PayPalPayment";

function handlePayment(paymentOnline: PaymentOnline, amount: number): void {
  paymentOnline.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100); // Output: Processed payment successfully

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200); // Output: Processed payment successfully

const cashPayment = new CashPayment();
handlePayment(cashPayment, 50); // type error
