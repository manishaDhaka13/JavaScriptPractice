movieList.style.display = "block";
// movieList.style.backgroundColor = "red";
movieList.style["background-color"] = "red";

const person = {
  "first name": "mani", //key have the mostly same rule as declaring identifier like can't have space for this we write in string form
  age: 30,
  hobbeis: ["cooking", "singing"],
  greet: function () {
    alert("hi there!");
  },
  1.5: "hello", // for this we use [] to access it
};

person.greet();

// we can also include a function in object like above using key value pair we describe function in value
// these function are called method
//we call method using object because it is a local scope method

//delete modify property

person.age = 31;
console.log(person.age);

delete person.age;
console.log(person);
console.log(person.age);

// here the output is undefine
// so person.age=undefined;    we can say that it behave like it's deleted;
person.age = null;
console.log(person.age); //it will print null;

person.isAdmin = true;
console.log(person);

// if we declare the key with space then we have to declare it in"" (string form) and have to access in [key] like this

console.log(person["first name"]);

//dynamic access

const keyName = "first name";
console.log(person[keyName]);
person[keyName] = "poonam";

console.log(person["first name"]);
console.log(person[1.5]);
console.log(person);
