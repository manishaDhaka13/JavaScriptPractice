// class Product {
//   title = "mani"; // only code written in class will go in new object
//   it() {
//     console.log("hi");
//   }
// }

// const obj = new Product();
// Product.hi(); give error because u have to call with object

// Product.title = 30; // this will not be consider when we create a obj
// console.log(Product);
// console.log(Product.title);
// console.log(obj.title);
// console.dir(Product);

// const product = { title, first };
// // here the title=title & first=first variable
// // it will give error
// console.log(product.title);

// class Product {
//   title; // it will be undefined initially //it will define when we create object
//   static price = 20;
//   imageUrl;
//   it() {
//     console.log("hi");
//   }
// }

// const obj = new Product();
// Product.title = "mani";
// // obj.it(); //it's a static function call with class
// // Product.it();
// console.log(obj);
// console.log(obj.price); // it will be undefine
// // static will not get called by object instance but with class name
// console.log(Product);

class BaseTest {
  rollNo = "12";
  // TestList = new Test();
  constructor() {
    //console.log(this.name); // it's undefine because field got after
    console.log(this.print); // in case if it store like a field name=field value
    // then it will be also undefine
    // but if it wriiten with method shorten then
    // it will be act like base class own mwthod got
    // owerritten and it will be acceseble
  }
  // we can make field like this
  // we have to define/initailised  all the class before the execution start
  // class  we can define them in any order from the point of execution
}
//const test = new Test(); // cannot access before initialising it
//we can't make instance of class before initiallising it
class Test extends BaseTest {
  name = "hello";
  constructor() {
    //this.print(); // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super();
  }
  // print = function () {
  //   console.log("hi");
  // };
  print() {
    console.log("hi");
  }
}

// class BaseTest {
//   rollNo = "12"; // we have to initialised baseClass before access it
// }

const test = new Test();
// test.print();
// hello();
// function hello() {
//   console.log("mani"); // in function we can define them anywhere
// }

// hello();
