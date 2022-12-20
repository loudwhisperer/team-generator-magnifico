const Engineer = require("../lib/Engineer.js");
let engineer;
beforeEach(() => {
  engineer = new Engineer("brent", 12, "test@gmail.com", "githubuser");
});
describe("Tests for the engineer Class", () => {
  it("should generate an engineer with provided data", () => {
    expect(engineer.github).toBe('githubuser');
  });
  it("should return the engineer's github", () => {
    const github = 'githubuser';

    expect(engineer.getGithub()).toBe(github);
  });

  it("should return the engineer role", () => {
    const role = "Engineer";

    expect(engineer.getRole()).toBe(role);
  });
});
