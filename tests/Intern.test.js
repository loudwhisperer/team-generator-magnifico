const Intern = require("../lib/Intern.js");
let intern;
beforeEach(() => {
  intern = new Intern("brent", 12, "test@gmail.com", "University of Denver");
});
describe("Tests for the intern Class", () => {
  it("should generate an intern with provided data", () => {
    expect(intern.school).toBe("University of Denver");
  });
  it("should return the intern's school", () => {
    const school = "University of Denver";

    expect(intern.getSchool()).toBe(school);
  });

  it("should return the intern role", () => {
    const role = "Intern";

    expect(intern.getRole()).toBe(role);
  });
});
