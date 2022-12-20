const Manager = require("../lib/Manager.js");
let manager;
beforeEach(() => {
  manager = new Manager("brent", 12, "test@gmail.com", 1234);
});
describe("Tests for the manager Class", () => {
  it("should generate a manager with provided data", () => {
    expect(manager.officeNumber).toBe(1234);
  });
  it("should return the manager's office number", () => {
    const officenumber = 1234;

    expect(manager.getOfficeNumber()).toBe(officenumber);
  });

  it("should return the manager role", () => {
    const role = "Manager";

    expect(manager.getRole()).toBe(role);
  });
});
