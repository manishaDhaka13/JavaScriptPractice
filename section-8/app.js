// creating array

const array = [1, 2, 3];
const array1 = new Array(5); //it will create a empty element with length 5;
const array2 = new Array("hi", "hello"); //we can omitt new here
console.log(array);
console.log(array1);
console.log(array2);

const array3 = Array.of(1, 4, 6, 8); //it will work like new Array
console.log(array3);

const array4 = Array.from("hello");
console.log(array4);
// Array.form() change the array like iterable like nodeList string into a new array;

const listItem = document.querySelectorAll("li");
console.log(listItem);
const listItemArray = Array.from(listItem);
console.log(listItemArray);

array.push(5);
console.log(array);
array.push(3, 5, 6); //push element from the last index and return the length of array after adding
console.log(array);
array.pop(); //remove the last element and return it the remove element

console.log(array.pop());

array.unshift(1, 4, 2); //add the item at starting and return the length
console.log(array);

array.shift(); //remove the first element
console.log(array);
console.log(array.shift());

//array.splice(0,0 ,"hello");     it will delete from including the argument first to how many accoarding to second argument and add the
//hello to the first argument  index; it will change the execting array

console.log(array);
array.splice(0); //it will be empty array  it will delete from index 0 to all index it wil return the deleted element

array.push(2, 3, 4, 5, 6, 7);

console.log(array.splice(2, 1, "hi"));

console.log(array);
const copiedArray = array.slice(); //it will return copy of array it means it will create a new array with new address

console.log(copiedArray);
copiedArray.push(10);
console.log(copiedArray);

const copiedArray1 = copiedArray.slice(2, 5); //create a new copy array  from index 2 to 5 the index 5 is not included
//it will also take -ve index but for both first and end index
console.log(copiedArray1);

const concatArray = array.concat(copiedArray); //it will return a new array without modifying existing array it will add the 2nd to the last at 1st
console.log(concatArray);
console.log(concatArray.concat("hello"));
console.log(concatArray);

//index
console.log(array);
let index = array.indexOf(3); //it will return the index at first matching element if no element match then it will return -1
//it will search in index 0 to the end of array means whole array
console.log(index);

//include    : if the element is in array or not return true or false

console.log(array.includes(5));

index = array.indexOf(3, 3); //it will search the no 3 from index=3 to end of array
console.log(index);
console.log(array);

index = array.lastIndexOf(7);
console.log(" index", index); //it will start checking from right side first matching element

console.log(array.includes(3, 3)); //it will search the no 3 from index=3 to end of array

//indexOf will return -1 for object in array

const objArray = [{ name: "manual" }, { name: "max" }, { name: "sunil" }];

index = objArray.indexOf({ name: "manual" }); //it will crate a new object {name:manual} and tries to compare it with objArray but it will compare the address
//so it will alwayas return -1
console.log(index);

//to check the object in array we use find and findindexOf method

let obj = objArray.find((person, idx, objArray) => {
  return person.name === "manual";
});
//it will return the object if we change in obj the the change will be also in objArray
console.log(obj);

obj.name = "asha";

console.log(objArray);

let objIndex = objArray.findIndex((person, idx, objArray) => {
  return person.name === "asha";
});

console.log(objIndex);

objArray[objIndex].name = "prateek";
console.log(objArray);

objArray.forEach((person, idx, persons) => {
  console.log(person, idx);
});

//map()     it will create a new array it will replace the return value to person

let mapArray = objArray.map((person, idx, persons) => {
  if (person.name === "max") {
    person.age = 30;
  }
  return person;
});

console.log(mapArray);
console.log(objArray);
console.log("this is compa", objArray === mapArray);

mapArray = objArray.map((person, idx, persons) => {
  let changeObj = { ...person };
  changeObj.lastName = "sharma";
  return changeObj;
});
console.log(mapArray);
console.log(objArray);

let price = [20, 40.8, 78, 90, 45];
let changedPrices = price.map((element, idx, price) => {
  let changePriceObj = { index: idx, changePrice: element * 12 };
  return changePriceObj;
});

console.log(price);
console.log(changedPrices);

array.splice(0);
array.push(1, 4, 3, 6, 12, 45, 87, 43, 89, 100, 12.5);

let sortedArray = array.sort((a, b) => {
  //it return the refernce to same array
  if (a > b) {
    return 1;
  }
  if (a === b) return 0;
  if (a < b) return -1;
});

console.log(array);
console.log(sortedArray);
console.log(array.reverse());

// let filterArray = array.filter((element, idx, array) => {
//   return element > 55;
// });

let filterArray = array.filter((el) => el > 55); //arrow function reduce code
console.log(array);
console.log(filterArray);

let reducedArray = array.reduce((prev, currentV) => {
  currentV += prev;
  return currentV;
}, 0);

console.log(array);
console.log(reducedArray);

let nameArray = ["manoz", "30"];
let joinName = nameArray.join(" ");

console.log(joinName);
console.log(typeof joinName);
console.log(nameArray);

let splitArray = joinName.split(" ");
console.log(splitArray);

const data = "new york;10.99;2000";

const transformedData = data.split(";");
transformedData[1] = +transformedData[1];
console.log(transformedData);
console.log(data);

let pricesss = [23, 43, 65, 75, 23, 86, 56, 97, 23, 54];
let copiedPricesss = [...pricesss]; //it will crate a new array with new address
let minimum = Math.min(...copiedPricesss); //spread operator take value out from array //min() take number as argument
console.log(minimum);

// creating a copy of array means a array with new address

let copiedPricesss2 = pricesss.map((el, idx, array) => {
  return el;
});

console.log(copiedPricesss2);
copiedPricesss2.unshift(13);
console.log(copiedPricesss2);
console.log(pricesss);

const persons = [
  { name: "Max", age: 30 },
  { name: "Manuel", age: 31 },
];
const copiedPersons = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));

persons.push({ name: "Anna", age: 29 });
persons[0].age = 31;

console.log(persons, copiedPersons);

//destucturing

let fullName = ["shiv", "sharma"];
let [firstName, lastNamee] = fullName;
console.log(firstName);
console.log(lastNamee);

const nameData = ["ricky", "pointing", 30, "cricketer"];
//firstName=nameData[0];
//lastNamee=nameData[1];

let [firstNameee, lastNameee, ...otherinfo] = nameData;

console.log(firstNameee);
console.log(lastNameee);
console.log(otherinfo);

//set method used to create a set which is iterable to just have unique values no duplicate;

const ids = new Set(); //it will create a empty set
console.log(ids);

ids.add(5);
console.log(ids);

//const ids1 = new Set(2, 3, 4, 5, 6);  //it will give error Set() take a iterable like array as argument

const ids1 = new Set([2, 3, 4, 5, 6]);
console.log(ids1);

ids1.add(6); //duplicate entry  so it will not add it but will not give error
console.log(ids1);

if (ids1.has(6)) {
  ids1.delete(6);
}
console.log(ids1);

//entries method on created set   will give access to the element of set

for (const element of ids1.entries()) {
  console.log(element);
  console.log(element[0]);
}

// new Map() method is used to add additional info

const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, [{ date: "yesterday", age: 30 }]]]);

console.log("map", personData);

personData.set(person2, [{ date: "22 / 2 / 13", age: 34 }]);
console.log("map2", personData);
console.log("person1", personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log("key,value", key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size);

let person4 = { namePerson: "max" };

const weakPerson = new WeakSet(); //WeakSet() can collected as garbage if it not in use; //memeory free
weakPerson.add(person4);
person4 = null;

console.log(person4);

let person5 = { namePerson: "max" };
let weakMapPerson = new WeakMap();

weakMapPerson.set(person5, [{ age: 30 }]);
person5 = null; // because it's used in weakMap the browser will collect it as a garbage we can't controll when browser collect it;
console.log(person5);
