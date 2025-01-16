/**
 * TODO write a JavaScript function that takes a string and returns it in revserse order.
 * DO NOT use the built-in reverse() method.
 * Should return the reversed string.
 * For example:
 *   reverseString("hello") should return "olleh"
 *   reverseString("world") should return "dlrow"
 *   reverseString("12345") should return "54321"
 */
function reverseString(str) {
  const newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;
}
reverseString('hello');
/**
 * TODO write a JavaScript function that takes a number and returns it in the reverse order.
 * Should return the reversed number.
 * For example:
 *   reverseNumber(12345) should return 54321
 *   reverseNumber(98765) should return 56789
 *   reverseNumber(101010) should return 010101
 */
function reverseNumber(num) {
  const sign = Math.sign(num);
  let numStr = Math.abs(num).toString();
  let reversed = '';

  for (let i = numStr.length - 1; i >= 0; i--) {
    reversed += numStr[i];
  }
  return parseInt(reversed) * sign;
}

console.log(reverseNumber(12345)); 
/**
 * TODO destruct the following object to get name and age.
 */
const person = {
  name: "John",
  info: {
    age: 30,
    city: "New York",
    job: "Developer",
  },
};

const { name, info: { age } } = person;

console.log(name);
console.log(age);

/**
 * TODO destruct the following array the first and second element, and the remaining elements in a third variable.
 */

const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];

const [first, second, ...rest] = thisArray;

console.log(first); // apple
console.log(second); // banana
console.log(rest); // remaining

/**
 * !!!!OPTIONAL!!!!
 * TODO Write a JavaScript function that checks if a string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads * the same forward and backward. For example, "madam" is a palindrome.
 * The function should return true if the string is a palindrome and false if it is not.
 * For example:
 *    isPalindrome("madam") should return true
 *    isPalindrome("hello") should return false
 *    isPalindrome("12321") should return true
 *    isPalindrome("race car") should return true
 *    isPalindrome("coding") should return false
 */

function isPalindrome() {}