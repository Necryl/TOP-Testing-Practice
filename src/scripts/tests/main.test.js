import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./../main";

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

test("caesarCipher is a function that takes a string and returns it with each character 'shifted'", () => {
  expect(caesarCipher("abcd", 1)).toBe("bcde");
  expect(caesarCipher("AbcD", 1)).toBe("BcdE");
  expect(caesarCipher("Ab, cD!", 1)).toBe("Bc, dE!");
  expect(caesarCipher("AbcD", 3)).toBe("DefG");
  expect(caesarCipher("z", 1)).toBe("a");
  expect(caesarCipher("a", -1)).toBe("z");
});

test("analyzeArray is a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toStrictEqual({
    average: 4,
    min: 1,
    max: 7,
    length: 7,
  });
  expect(analyzeArray([1, 2, 9, 4, 11, 6, 7])).toStrictEqual({
    average: 5.71,
    min: 1,
    max: 11,
    length: 7,
  });
});
