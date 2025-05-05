import { FullTimeEmployee } from "../../Solid/2.Ocp/pratice2/FullTimeEmployee";

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
