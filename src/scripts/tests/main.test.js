import capitalize from "./../main";

test("capitalize, capitalize the first char of a given string", () => {
  expect(capitalize("abcd")).toBe("Abcd");
  expect(capitalize("hohoho")).toBe("Hohoho");
});
