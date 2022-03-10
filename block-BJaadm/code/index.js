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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((person) => person.name);
console.log(peopleName);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => person.grade);
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person) => person.sex);
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let nameStartsWithJorP = peopleName.filter((person) => {
  return person.startsWith("J") || person.startsWith("P");
});
console.log(nameStartsWithJorP);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let startsWithAorC = peopleName.filter(
  (person) => person.startsWith("A") || person.startsWith("C")
);
console.log(startsWithAorC);
startsWithAorC.forEach((person) => console.log(person.length));
// Log all the filtered male ('M') in persons array
let males = persons.filter((person) => person.sex === "M");
males.forEach((male) => console.log(male.name));
// Log all the filtered female ('F') in persons array
let females = persons.filter((person) => person.sex === "F");
females.forEach((female) => console.log(female.name));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let femaleNameStartWithCorJ = females.filter(
  (female) => female.name.startsWith("C") || female.name.startsWith("J")
);
console.log(femaleNameStartWithCorJ);
// Log all the even numbers from peopleGrade array
peopleGrade.forEach((grade) => {
  if (grade % 2 === 0) {
    console.log(grade);
  }
});
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((person) => person.name.startsWith("J")));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((person) => person.name.startsWith("P")));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(
  persons.find(
    (person) =>
      person.name.startsWith("P") && person.grade > 10 && person.sex === "F"
  )
);
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === "F");
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex === "M");
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cur) => (acc += cur), 0);
console.log(gradeTotal);
// Find the average grade
let averageGrade = gradeTotal / peopleGrade.length;
console.log(averageGrade);
// Find the average grade of male
let maleGradeTotal = malePersons.reduce((acc, cur) => (acc += cur.grade), 0);
let maleAverageGrade = maleGradeTotal / malePersons.length;
console.log(maleAverageGrade);
// Find the average grade of female
let femaleGradeTotal = femalePersons.reduce(
  (acc, cur) => (acc += cur.grade),
  0
);
let femaleAverageGrade = femaleGradeTotal / femalePersons.length;
console.log(femaleAverageGrade);
// Find the highest grade
console.log([...peopleGrade].sort((a, b) => a - b).pop());
// Find the highest grade in male
console.log(
  [...malePersons].sort((a, b) => a.grade - b.grade)[malePersons.length - 1]
    .grade
);
// Find the highest grade in female
console.log(
  [...femalePersons].sort((a, b) => a.grade - b.grade)[femalePersons.length - 1]
    .grade
);
// Find the highest grade for people whose name starts with 'J' or 'P'

let startsWithJorP = persons.filter(
  (person) => person.name.startsWith("J") || person.name.startsWith("P")
);
console.log([...startsWithJorP].sort((a, b) => a - b).pop());
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b);
console.log(peopleGrade);
// yes it mutate the original array.
// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a, b) => b - a));
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) => b - a));
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort());
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());
