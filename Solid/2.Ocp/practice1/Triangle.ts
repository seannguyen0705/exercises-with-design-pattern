import { Shape } from "./Shape";

export class Triangle extends Shape {
  private length: number;
  constructor(length: number) {
    super([]);
    this.length = length;
  }

  public calculateArea(): number {
    return 0.5 * this.length * this.length;
  }

  public getLength(): number {
    return this.length;
  }
  public setLength(length: number): void {
    this.length = length;
  }
}
