import { CashPayment } from "../../Solid/3.Lsp/CashPayment";
import { CreditCardPayment } from "../../Solid/3.Lsp/CreditCardPayment";
import { PaymentProcessor } from "../../Solid/3.Lsp/PaymentProcessor";
import { PayPalPayment } from "../../Solid/3.Lsp/PayPalPayment";

describe("PayPalPayment", () => {
  let payPalPayment: PayPalPayment;

  beforeEach(() => {
    payPalPayment = new PayPalPayment();
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.spyOn(console, "log").mockRestore();
  });

  test("Should process payment by paypal", () => {
    payPalPayment.processPayment(3000);

    expect(console.log).toHaveBeenCalledWith(
      "Processing PayPal payment of $3000"
    );
    expect(console.log).toHaveBeenCalledWith("Redirecting to PayPal...");
    expect(console.log).toHaveBeenCalledWith(
      "Completing PayPal transaction..."
    );
    expect(console.log).toHaveBeenCalledTimes(3);
  });
});

describe("Credit Cart Payment", () => {
  let creditCardPayment: CreditCardPayment;

  beforeEach(() => {
    creditCardPayment = new CreditCardPayment();
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.spyOn(console, "log").mockRestore();
  });

  test("Should process payment by credit card", () => {
    creditCardPayment.processPayment(3000);

    expect(console.log).toHaveBeenCalledWith(
      "Processing credit card payment of $3000"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Validating credit card details..."
    );
    expect(console.log).toHaveBeenCalledWith("Charging the credit card...");
    expect(console.log).toHaveBeenCalledTimes(3);
  });
});

describe("Cash payment", () => {
  let cashPayment: CashPayment;

  beforeEach(() => {
    cashPayment = new CashPayment();
  });

  test("Should new object is instance of PaymentProcessor", () => {
    expect(cashPayment).toBeInstanceOf(PaymentProcessor);
  });
});
