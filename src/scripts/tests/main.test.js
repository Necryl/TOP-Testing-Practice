import { capitalize, reverseString, calculator } from "./../main";

test("capitalize, capitalize the first char of a given string", () => {
  expect(capitalize("abcd")).toBe("Abcd");
  expect(capitalize("hohoho")).toBe("Hohoho");
});

test("reverseString() takes a string and returns it reversed", () => {
  expect(reverseString("abcd")).toBe("dcba");
  expect(reverseString("hohoho")).toBe("ohohoh");
});

test("'calculator' is an object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(3, 5)).toBe(8);
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(3, 8)).toBe(-5);
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.divide(16, 4)).toBe(4);
  expect(calculator.multiply(4, 8)).toBe(32);
  expect(calculator.multiply(9, 3)).toBe(27);
});
