import { Employee } from "./Employee";

export class FreelancerEmployee extends Employee {
  private workingTime: number;
  private hourlyRate: number;
  constructor(name: string, workingTime: number, hourlyRate: number = 40) {
    super(name);
    this.workingTime = workingTime;
    this.hourlyRate = hourlyRate;
  }

  calculateSalary(): number {
    return this.workingTime * this.hourlyRate;
  }

  getWorkingTime(): number {
    return this.workingTime;
  }
  setWorkingTime(workingTime: number): void {
    this.workingTime = workingTime;
  }

  getHourlyRate(): number {
    return this.hourlyRate;
  }
  setHourlyrate(hourlyRate: number): void {
    this.hourlyRate = hourlyRate;
  }
}
