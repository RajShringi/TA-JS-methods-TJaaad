// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
let arr = ["called", "sentance"];
strings.push(...arr);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
let containIs = [];
for (let string of strings) {
  if (string.includes("is")) {
    containIs.push(string);
  }
}
console.log(containIs);
// - Find all the words that contain 'is' use string method 'indexOf'
let containIsIndexOf = [];
for (let string of strings) {
  if (string.indexOf("is") !== -1) {
    containIsIndexOf.push(string);
  }
}
console.log(containIsIndexOf);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divisibleByThree = (arr) => {
  return arr.every((num) => num % 3 === 0);
};
console.log(divisibleByThree(numbers));
// -  Sort Array from smallest to largest
let arr1 = [...numbers];
arr1.sort((a, b) => a - b);
console.log(arr1);
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let largestNumber = numbers[0];

numbers.forEach((num) => {
  if (largestNumber < num) {
    largestNumber = num;
  }
});
console.log(largestNumber);

// - Find longest string in strings
let longestStringLength = strings[0].length;
let longestString = "";
strings.forEach((string) => {
  if (longestStringLength < string.length) {
    longestStringLength = string.length;
    longestString = string;
  }
});
console.log(longestString);
// - Find all the even numbers
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// - Find all the odd numbers
let oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);
// - Place a new word at the start of the array use (unshift)
strings.unshift("This");
// - Make a subset of numbers array [18,9,7,11]
let numberSubset = numbers.slice(3, 7);
console.log(numberSubset);
// - Make a subset of strings array ['a','collection']
let stingSubset = strings.slice(2, 4);
console.log(stingSubset);
// - Replace 12 & 18 with 1221 and 1881
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 12) {
    numbers.splice(i, 1, 1221);
  }
  if (numbers[i] === 18) {
    numbers.splice(i, 1, 1881);
  }
}
console.log(numbers);
// - Replace words in strings array with the length of the word
for (let i = 0; i < strings.length; i++) {
  strings[i] = strings[i].length;
}
console.log(strings);
// - Find the sum of the length of words using above question
let sum = strings.reduce((acc, cur) => (acc += cur), 0);
console.log(sum);
// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
let startWithJ = customers.filter((customer) => {
  return customer.firstname[0] === "J";
});
console.log(startWithJ);
// - Create new array with only first name
let FirstName = customers.map((customer) => customer.firstname);
console.log(FirstName);
// - Create new array with all the full names (ex: "Joe Blogs")
let FullName = customers.map(
  (customer) => customer.firstname + " " + customer.lastname
);
console.log(FullName);
// - Sort the array created above alphabetically
FullName.sort();
console.log(FullName);
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelInTheFirstName = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u")
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(vowelInTheFirstName);
