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

function caesarCipher(text, offset) {
  const letters = [..."abcdefghijklmnopqrstuvwxyz"];

  const result = [...text].reduce((final, current) => {
    let uppercase = false;
    let alphabet = false;
    if (letters.includes(current)) {
      alphabet = true;
    } else if (letters.includes(current.toLowerCase())) {
      alphabet = true;
      uppercase = true;
    }
    let char = current.toLowerCase();
    if (alphabet) {
      let index = letters.indexOf(char) + offset;
      if (index > 25) {
        index -= 26;
      } else if (index < 0) {
        index += 26;
      }
      if (uppercase) {
        char = letters[index].toUpperCase();
      } else {
        char = letters[index];
      }
    }
    final += char;
    return final;
  }, "");

  return result;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
