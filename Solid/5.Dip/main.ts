/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { EmailService } from "./Email.service";
import { Notification } from "./Notification";
import { SMSService } from "./SMS.service";

const notification1 = new Notification(new EmailService());
const notification2 = new Notification(new SMSService());

notification1.sendMessage("Hello, this is a notification!");
notification2.sendMessage("Hello, this is a notification!");
