import { Circle } from "../../Solid/2.Ocp/practice1/Circle";
import { Rectangle } from "../../Solid/2.Ocp/practice1/Rectangle";
import { Shape } from "../../Solid/2.Ocp/practice1/Shape";
import { Square } from "../../Solid/2.Ocp/practice1/Square";
import { Triangle } from "../../Solid/2.Ocp/practice1/Triangle";

describe("Shape", () => {
  let circle: Circle;
  let rectangle: Rectangle;
  let square: Square;
  let triangle: Triangle;
  let shape: Shape;

  beforeEach(() => {
    circle = new Circle(1);
    rectangle = new Rectangle(5, 10);
    square = new Square(5);
    triangle = new Triangle(2);
    shape = new Shape([circle, rectangle, square, triangle]);
  });

  test("should return total area of shapes", () => {
    expect(shape.calculateArea()).toEqual(
      circle.calculateArea() +
        rectangle.calculateArea() +
        square.calculateArea() +
        triangle.calculateArea()
    );
  });

  test("should return a shape list", () => {
    expect(shape.getShapes().length).toBe(4);
  });
  test("should assign new shape list", () => {
    const newShapes = [circle];
    shape.setShapes(newShapes);
    expect(shape.getShapes().length).toBe(1);
  });
  test("should add a shape to shape list", () => {
    const newCircle = new Circle(2);
    shape.addShape(newCircle);
    const shapes = shape.getShapes();
    expect(shapes.length).toBe(5);
    expect(shapes).toEqual(
      expect.arrayContaining([expect.objectContaining(newCircle)])
    );
  });

  test("should remove a shape from shape list", () => {
    shape.removeShape(circle);
    expect(shape.getShapes().length).toBe(3);
  });
});

describe("Circle", () => {
  let circle: Circle;
  const radius = 2;
  beforeEach(() => {
    circle = new Circle(radius);
  });

  test("should calculate and return area of circle", () => {
    expect(circle.calculateArea()).toBe(radius * radius * Math.PI);
  });
  test("should return radius of circle", () => {
    expect(circle.getRadius()).toBe(radius);
  });
  test("should set new radius for circle", () => {
    const newRadius = 3;
    circle.setRadius(newRadius);
    expect(circle.getRadius()).toBe(newRadius);
  });
});

describe("Rectangle", () => {
  let rectangle: Rectangle;
  const height = 5;
  const width = 10;
  beforeEach(() => {
    rectangle = new Rectangle(height, width);
  });
  test("should calculate and return area of rectangle", () => {
    expect(rectangle.calculateArea()).toBe(height * width);
  });
  test("should return height of rectangle", () => {
    expect(rectangle.getHeight()).toBe(height);
  });
  test("should return width of rectangle", () => {
    expect(rectangle.getWidth()).toBe(width);
  });
  test("should set new height", () => {
    const newHeight = 3;
    rectangle.setHeight(newHeight);
    expect(rectangle.getHeight()).toBe(newHeight);
  });
  test("should set new width", () => {
    const newWidth = 3;
    rectangle.setWidth(newWidth);
    expect(rectangle.getWidth()).toBe(newWidth);
  });
});

describe("Square", () => {
  let square: Square;
  const side = 5;
  beforeEach(() => {
    square = new Square(side);
  });

  test("Should calculate and return area of square", () => {
    expect(square.calculateArea()).toBe(side * side);
  });
  test("Should return side of square", () => {
    expect(square.getSide()).toBe(side);
  });
  test("Should set new side", () => {
    const newSide = 3;
    square.setSide(newSide);
    expect(square.getSide()).toBe(newSide);
  });
});

describe("Triangle", () => {
  let triangle: Triangle;
  const length = 2;
  beforeEach(() => {
    triangle = new Triangle(length);
  });

  test("Should calculate and return area of triangle", () => {
    expect(triangle.calculateArea()).toBe(length * length * 0.5);
  });
  test("Should return length of triangle", () => {
    expect(triangle.getLength()).toBe(length);
  });
  test("Should set new length for triangle", () => {
    const newLength = 3;
    triangle.setLength(newLength);
    expect(triangle.getLength()).toBe(newLength);
  });
});
