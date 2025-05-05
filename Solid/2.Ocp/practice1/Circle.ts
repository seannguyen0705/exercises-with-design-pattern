import { Shape } from "./Shape";

export class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super([]);
    this.radius = radius;
  }
  public calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  public getRadius(): number {
    return this.radius;
  }
  public setRadius(radius: number): void {
    this.radius = radius;
  }
}
