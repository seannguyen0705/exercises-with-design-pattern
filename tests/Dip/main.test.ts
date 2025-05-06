import { EmailService } from "../../Solid/5.Dip/Email.service";
import { Notification } from "../../Solid/5.Dip/Notification";
import { SMSService } from "../../Solid/5.Dip/SMS.service";

describe("Notification", () => {
  let notificationEmail: Notification;
  let notificationSms: Notification;
  let emailService: EmailService;
  let smsService: SMSService;

  beforeEach(() => {
    emailService = new EmailService();
    smsService = new SMSService();
    notificationEmail = new Notification(emailService);
    notificationSms = new Notification(smsService);

    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should send email notification", () => {
    notificationEmail.sendMessage("Hello, this is a notification!");
    expect(console.log).toHaveBeenCalledWith(
      "Sending email with message: Hello, this is a notification!"
    );
  });

  it("should send sms notification", () => {
    notificationSms.sendMessage("Hello, this is a notification!");
    expect(console.log).toHaveBeenCalledWith(
      "Sending sms with message: Hello, this is a notification!"
    );
  });
});

describe("EmailService", () => {
  let emailService: EmailService;

  beforeEach(() => {
    emailService = new EmailService();
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should send message by email", () => {
    emailService.sendMessage("Hello, this is a notification!");
    expect(console.log).toHaveBeenCalledWith(
      "Sending email with message: Hello, this is a notification!"
    );
  });
});

describe("SMSService", () => {
  let smsService: SMSService;

  beforeEach(() => {
    smsService = new SMSService();
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should send message by sms", () => {
    smsService.sendMessage("Hello, this is a notification!");
    expect(console.log).toHaveBeenCalledWith(
      "Sending sms with message: Hello, this is a notification!"
    );
  });
});
