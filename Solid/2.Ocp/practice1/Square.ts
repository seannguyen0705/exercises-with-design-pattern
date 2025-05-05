import { Shape } from "./Shape";

export class Square extends Shape {
  private side: number;
  constructor(side: number) {
    super([]);
    this.side = side;
  }

  public calculateArea(): number {
    return Math.pow(this.side, 2);
  }

  public getSide(): number {
    return this.side;
  }
  public setSide(side: number): void {
    this.side = side;
  }
}
