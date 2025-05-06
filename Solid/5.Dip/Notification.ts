import { EmailService } from "./Email.service";
import { SMSService } from "./SMS.service";

export class Notification {
  private sendMessageService: EmailService | SMSService;

  constructor(sendMessageService: EmailService | SMSService) {
    this.sendMessageService = sendMessageService;
  }

  public sendMessage(message: string): void {
    this.sendMessageService.sendMessage(message);
  }
}
