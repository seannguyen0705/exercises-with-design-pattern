import { Employee } from "./Employee";

export class PartTimeEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }
  calculateSalary(): number {
    return 3000;
  }
}
