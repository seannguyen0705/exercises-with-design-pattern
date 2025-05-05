import { Employee } from "./Employee";

export class FullTimeEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    return 5000;
  }
}
