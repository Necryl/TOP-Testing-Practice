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

module.exports = { capitalize, reverseString };
