import { capitalize, reverseString } from "./../main";

test("capitalize, capitalize the first char of a given string", () => {
  expect(capitalize("abcd")).toBe("Abcd");
  expect(capitalize("hohoho")).toBe("Hohoho");
});

test("reverseString() takes a string and returns it reversed", () => {
  expect(reverseString("abcd")).toBe("dcba");
  expect(reverseString("hohoho")).toBe("ohohoh");
});
