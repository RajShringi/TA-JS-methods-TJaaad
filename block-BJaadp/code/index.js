let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
console.log(persons.reduce((acc, cur) => (acc += cur.grade), 0));
// Find the average grade of male
let maleGrade = persons
  .filter((person) => person.sex === "M")
  .reduce((acc, cur) => (acc += cur.grade), 0);
console.log(maleGrade);
// Find the average grade of female
let femaleGrade = persons
  .filter((person) => person.sex === "F")
  .reduce((acc, cur) => (acc += cur.grade), 0);
console.log(femaleGrade);
// Find the highest grade
console.log([...persons].sort((a, b) => a.grade - b.grade).pop());
// Find the highest grade in male
let malePersons = persons.filter((person) => person.sex === "M");
console.log([...malePersons].sort((a, b) => a.grade - b.grade).pop());
// Find the highest grade in female
let femalePersons = persons.filter((person) => person.sex === "F");
console.log([...femalePersons].sort((a, b) => a.grade - b.grade).pop());
// Find the highest grade for people whose name starts with 'J' or 'P'
let peopleJorP = persons.filter(
  (person) => person.name.startsWith("J") || person.name.startsWith("P")
);
console.log([...peopleJorP].sort((a, b) => a.grade - b.grade).pop());

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = {};
for (let fruit of fruitBasket) {
  fruitsObj[fruit] = fruitBasket.filter((f) => f === fruit).length;
}
console.log(fruitsObj);
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
console.log(Object.keys(fruitsObj).map((fruit) => [fruit, fruitsObj[fruit]]));

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
console.log(data.reduce((acc, cur) => acc.concat(cur)));

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
console.log(dataTwo.reduce((acc, cur) => acc.concat(cur.flat(Infinity)), []));
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
let increment = (num) => {
  return num + 1;
};
let double = (num) => {
  return num * 2;
};
let decrement = (num) => {
  return num - 1;
};
let triple = (num) => {
  return num * 3;
};
let half = (num) => {
  return Math.round(num / 2);
};

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
let value = pipeline[0](3);
for (let i = 1; i < pipeline.length; i++) {
  value = pipeline[i](value);
}
console.log(value);

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
let value1 = pipeline2[0](8);
for (let i = 1; i < pipeline2.length; i++) {
  value1 = pipeline2[i](value1);
}
console.log(value1);
