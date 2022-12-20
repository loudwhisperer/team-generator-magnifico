const Employee = require("../lib/Employee.js");
let employee;
beforeEach(() => {
  employee = new Employee("brent", 12, "test@gmail.com");
});
describe("Tests for the Employee Class", () => {
  it("should generate an employee with provided data", () => {
    expect(employee).toEqual({
      name: "brent",
      id: 12,
      email: "test@gmail.com",
    });
  });
  it("should return the employee name", () => {
    const name = "brent";

    expect(employee.getName()).toBe(name);
  });
  it("should return the employee id", () => {
    const id = 12;

    expect(employee.getId()).toBe(id);
  });
  it("should return the employee email", () => {
    const email = "test@gmail.com";

    expect(employee.getEmail()).toBe(email);
  });

  it("should return the employee role", () => {
    const role = "Employee";

    expect(employee.getRole()).toBe(role);
  });
});
