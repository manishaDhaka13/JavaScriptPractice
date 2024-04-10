// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "max";
//   constructor() {
//     super();

//     this.age = 30;
//   }

//   greet() {
//     console.log("hi I am" + this.name + "and I am" + this.age + "years old");
//   }
// }

// const person = new Person();
// console.log(person);
// console.log(Person.prototype);
// console.log(person.__proto__);
// console.log(Person.prototype === person.__proto__);  //true
// console.log(AgedPerson);
// console.log(AgedPerson.prototype);
// console.log(Person.__proto__);
// console.log(Person.prototype === Person.__proto__); //false

// class is syntactical suger for construction function and
//prototype

//constructor function

function Person(){
  this.name="max";
  this.age=30;
  this.greet=function(){
    console.log("hi am"+this.name+"and I am"+this.age+"years old");
  };
}

console.dir(Person);
const person=new Person();
console.log(person);
