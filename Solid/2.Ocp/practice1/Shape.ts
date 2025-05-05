export class Shape {
  shapes: Shape[];
  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  public calculateArea(): number {
    return this.shapes.reduce(
      (total, shape) => total + shape.calculateArea(),
      0
    );
  }

  public getShapes(): Shape[] {
    return this.shapes;
  }
  public setShapes(shapes: Shape[]): void {
    this.shapes = shapes;
  }
  public addShape(shape: Shape): void {
    this.shapes.push(shape);
  }
  public removeShape(shape: Shape): void {
    this.shapes = this.shapes.filter((item) => item !== shape);
  }
}
