import { Circle } from "../../Solid/2.Ocp/practice1/Circle";
import { Rectangle } from "../../Solid/2.Ocp/practice1/Rectangle";
import { Shape } from "../../Solid/2.Ocp/practice1/Shape";
import { Square } from "../../Solid/2.Ocp/practice1/Square";
import { Triangle } from "../../Solid/2.Ocp/practice1/Triangle";
import { FreelancerEmployee } from "../../Solid/2.Ocp/pratice2/FreelancerEmployee";

import { FullTimeEmployee } from "../../Solid/2.Ocp/pratice2/FullTimeEmployee";
import { InternEmployee } from "../../Solid/2.Ocp/pratice2/InternEmployee";
import { PartTimeEmployee } from "../../Solid/2.Ocp/pratice2/PartTimeEmployee";
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

// ================== PRACTICE 2 ===================

describe("Full-Time Employee", () => {
  let fullTimeEmployee: FullTimeEmployee;
  const name = "Sean";

  beforeEach(() => {
    fullTimeEmployee = new FullTimeEmployee(name);
  });

  test("should calculate and return salary", () => {
    expect(fullTimeEmployee.calculateSalary()).toBe(5000);
  });
  test("Should return name of employee", () => {
    expect(fullTimeEmployee.getName()).toBe(name);
  });
  test("Should set new name of employee", () => {
    const newName = "Trump";
    fullTimeEmployee.setName(newName);
    expect(fullTimeEmployee.getName()).toBe(newName);
  });
});

describe("Part-Time Employee", () => {
  let partTimeEmployee: PartTimeEmployee;

  beforeEach(() => {
    partTimeEmployee = new PartTimeEmployee("Sean");
  });

  test("Should calculate and return salary", () => {
    expect(partTimeEmployee.calculateSalary()).toBe(3000);
  });
});

describe("Intern Employee", () => {
  let internEmployee: InternEmployee;
  beforeEach(() => {
    internEmployee = new InternEmployee("Sean");
  });

  test("Should calculate and return salary", () => {
    expect(internEmployee.calculateSalary()).toBe(1000);
  });
});

describe("Freelancer Employee", () => {
  let freelancer: FreelancerEmployee;
  const workingTime = 8;
  const hourlyRate = 40;

  beforeEach(() => {
    freelancer = new FreelancerEmployee("Sean", workingTime, hourlyRate);
  });

  test("Should calculate and return salary", () => {
    expect(freelancer.calculateSalary()).toBe(workingTime * hourlyRate);
  });
  test("Should return working time of employee", () => {
    expect(freelancer.getWorkingTime()).toBe(workingTime);
  });

  test("Should return hourly rate of employee", () => {
    expect(freelancer.getHourlyRate()).toBe(hourlyRate);
  });

  test("Should set working time", () => {
    const newWorkingTime = 9;
    freelancer.setWorkingTime(newWorkingTime);
    expect(freelancer.getWorkingTime()).toBe(newWorkingTime);
  });

  test("Should set hourly rate", () => {
    const hourlyRate = 50;
    freelancer.setHourlyrate(hourlyRate);
    expect(freelancer.getHourlyRate()).toBe(hourlyRate);
  });

  test("Should return a freelancer with default hourlyRate", () => {
    const defaultFreelancer = new FreelancerEmployee("Sean", 8);
    expect(freelancer.getHourlyRate()).toBe(40);
  });
});
