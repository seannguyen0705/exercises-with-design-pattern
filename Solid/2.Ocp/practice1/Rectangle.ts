import { Shape } from "./Shape";

export class Rectangle extends Shape {
  private height: number;
  private width: number;
  constructor(height: number, width: number) {
    super([]);
    this.height = height;
    this.width = width;
  }

  public calculateArea(): number {
    return this.height * this.width;
  }

  public getHeight(): number {
    return this.height;
  }
  public setHeight(height: number): void {
    this.height = height;
  }

  public getWidth(): number {
    return this.width;
  }
  public setWidth(width: number): void {
    this.width = width;
  }
}
