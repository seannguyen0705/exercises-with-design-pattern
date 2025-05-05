import { Employee } from "./Employee";

export class InternEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    return 1000;
  }
}
