// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  // your code goes here
  let sum = 0;
  got.houses.forEach((house) => {
    sum += house.people.length;
  });
  return sum;
}

function peopleByHouses() {
  // your code goes here
  let obj = {};
  got.houses.forEach((house) => {
    obj[house.name] = house.name.length;
  });
  return obj;
}

function everyone() {
  // your code goes here
  let final = [];
  got.houses.forEach((house) => {
    let People = house.people.map((person) => person.name);
    final = final.concat(People);
  });
  return final;
}

function nameWithS() {
  // your code goes here
  // let final = [];
  // for (let i = 0; i < got.houses.length; i++) {
  //   for (let j = 0; j < got.houses[i].people.length; j++) {
  //     if (got.houses[i].people[j].name.toLowerCase().includes("s")) {
  //       final.push(got.houses[i].people[j].name);
  //     }
  //   }
  // }
  // return final;
  let allPeople = everyone();
  return allPeople.filter((person) => person.toLowerCase().includes("s"));
}

function nameWithA() {
  // your code goes here
  let allPeople = everyone();
  return allPeople.filter((person) => person.toLowerCase().includes("a"));
}

function surnameWithS() {
  // your code goes here
  // let final = [];
  // for (let i = 0; i < got.houses.length; i++) {
  //   for (let j = 0; j < got.houses[i].people.length; j++) {
  //     if (got.houses[i].people[j].name.split(" ")[1][0].startsWith("S")) {
  //       final.push(got.houses[i].people[j].name);
  //     }
  //   }
  // }
  // return final;
  let allPeople = everyone();
  return allPeople.filter((person) => person.split(" ")[1].includes("S"));
}

function surnameWithA() {
  // your code goes here
  let allPeople = everyone();
  return allPeople.filter((person) => person.split(" ")[1].includes("A"));
}

function peopleNameOfAllHouses() {
  // your code goes here
  // let obj = {};
  // for (let i = 0; i < got.houses.length; i++) {
  //   obj[got.houses[i].name] = [];
  //   for (let j = 0; j < got.houses[i].people.length; j++) {
  //     obj[got.houses[i].name].push(got.houses[i].people[j].name);
  //   }
  // }
  // return obj;
  let obj = {};
  got.houses.forEach((house) => {
    obj[house.name] = house.people.map((person) => person.name);
  });
  return obj;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
