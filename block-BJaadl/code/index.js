let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr) {
  let sortArr = [...arr].sort((a, b) => a.length - b.length);
  if (
    sortArr[sortArr.length - 1].length === sortArr[sortArr.length - 2].length
  ) {
    return sortArr[sortArr.length - 2];
  } else {
    return sortArr[sortArr.length - 1];
  }
}
console.log(findLongestWord(words));
// - Convert the above array "words" into an array of length of word instead of word.
let newWords = words.map((word) => word.length);
console.log(newWords);
// - Create a new array that only contains word with atleast one vowel.
let atleastOneVowel = words.filter((word) => {
  if (
    word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("i") ||
    word.includes("i")
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(atleastOneVowel);
// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));
// - Create a new array that contians words not starting with vowel.
let notStartsWithVowel = words.filter((word) => {
  if (
    word.startsWith("a") ||
    word.startsWith("e") ||
    word.startsWith("i") ||
    word.startsWith("o") ||
    word.startsWith("u")
  ) {
    return false;
  } else {
    return true;
  }
});
console.log(notStartsWithVowel);
// - Create a new array that contianse words not ending with vowel
let notEndsWithVowel = words.filter((word) => {
  if (
    word.endsWith("a") ||
    word.endsWith("e") ||
    word.endsWith("i") ||
    word.endsWith("o") ||
    word.endsWith("u")
  ) {
    return false;
  } else {
    return true;
  }
});
console.log(notEndsWithVowel);
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = (arr) => {
  return arr.reduce((acc, cur) => (acc += cur), 0);
};
console.log(sumArray(numbers));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedBy3 = (arr) => {
  return arr.map((element) => element * 3);
};
console.log(multipliedBy3(numbers));
// - Create a new array that contains only even numbers
let evenNumbers = (arr) => {
  return arr.filter((element) => element % 2 === 0);
};
console.log(evenNumbers(numbers));
// - Create  a new array that contains only odd numbers.
let oddNumbers = (arr) => {
  return arr.filter((element) => element % 2 !== 0);
};
console.log(oddNumbers(numbers));
// - Create a new array that should have true for even number and false for odd numbers.
let evenTrueOddFalse = (arr) => {
  return arr.map((element) => {
    if (element % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
};
console.log(evenTrueOddFalse(numbers));
// - Sort the above number in assending order.
let sortNumbers = (arr) => {
  return [...arr].sort((a, b) => a - b);
};
console.log(sortNumbers(numbers));
// - Does sort mutate the original array?
// yes sort mutate the original array. we should create a new array every time we use sort.
// - Find the sum of the numbers in the array.
console.log(sumArray(numbers));
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageArray = (arr) => {
  let sum = arr.reduce((acc, cur) => (acc += cur), 0);
  return sum / arr.length;
};
console.log(averageArray(numbers));

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arr) {
  let sum = arr.reduce((acc, cur) => {
    return (acc = acc + cur.length);
  }, 0);
  return sum / arr.length;
}
console.log(averageWordLength(strings));
