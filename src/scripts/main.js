/* eslint-disable no-unused-vars */
import mainStyles from "./../styles/main.css";
/* eslint-enable no-unused-vars */

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function reverseString(text) {
  return [...text].reduce((final, current) => {
    final = current + final;
    return final;
  }, "");
}

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
};

module.exports = { capitalize, reverseString, calculator };
