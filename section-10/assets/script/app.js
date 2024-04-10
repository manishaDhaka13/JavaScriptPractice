// object are instance of class they are define with class keyword
// like
// class nameOfClass{
//    field=value;     this get converted into proerty:value when object is created based on clasa
// }
// if we don't set any value then it will be undefined initially
// claas are bluprint of object it define the structure of object
// the properties are called field in class
// constructor() method in javaScript automatically create the object when we
// write like this
//const obj= new nameOfClass();
// constructor method in javascript add all field=value to property:value;

// class Product {
//   title;
//   price;
//   desc;
//   methodName(){

// }
// }
// we can also declare method in class
// to store data in different object but with same structure we use class

class Product {
  title = "Default Value";
  price;
  desc;
  imageUrl;
  // title ,price ,desc are field in class
  //when we create instanse of class javaScript automatically call the in-built
  // constructor method to create a object and convet field=value to
  //propery:value we don't have to write constructor method if we have to use
  //property with same value in every object if it is not define then the propery
  // became undefine
  // if we wan't to change the propety value then we have to owerwrite property in constructor
  //method , javascript automatically called it when we create a object

  constructor(name, pricee, description, image) {
    this.title = name; // here this refer to the one who is responsible
    // for calling constructor
    // javascript call this function automatically for
    // the new object

    this.price = pricee;
    this.desc = description;
    this.imageUrl = image;
  }
}

const productList1 = [new Product(), new Product()];
// console.log(productList);
// const productList2 = [
//   new Product("a pillow", "$19.9", "a soft pillow"),
//   new Product("a carpet", "$40", "A carpet which you might like - or not."),
// ];

// console.log(productList);

// function renderlist() {
//   const renderHook = document.getElementById("app");
//   const prodList = document.createElement("ul");
//   prodList.className = "product-list";
//   for (const prod of productList) {
//     const prodEl = document.createElement("li");
//     prodEl.className = "product-item";
//     prodEl.innerHTML = `
//         <div>
//         <img src="${prod.imageUrl}" alt="${prod.title}"/>
//         <div class="product-item-info>
//         <h2>${prod.title}</h2>
//         <h3>${prod.price}</h3>
//         <p>${prod.disc}</p>
//         <button>Add to Cart</button>
//         </div>
//         </div>
//         `;
//     prodList.append(prodEl);
//   }
//   renderHook.append(prodList);
// }

// renderlist();

//using class we can define the data and method related to that object in class
// and reuse that code again

// const productList = {
//   products: [
//     new Product(
//       "a pillow",
//       "19.9",
//       "a soft pillow",
//       "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg"
//     ),
//     new Product(
//       "a carpet",
//       "89.9",
//       "A carpet which you might like - or not.",
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg"
//     ),
//   ],
//   render() {
//     const renderHook = document.getElementById("app");
//     const prodList = document.createElement("ul");
//     prodList.className = "product-list";
//     for (const prod of this.products) {
//       const prodEl = document.createElement("li");
//       prodEl.className = "product-item";
//       prodEl.innerHTML = `
//             <div>
//             <img src="${prod.imageUrl}" alt="${prod.title}"/>
//             <div class="product-item-info">
//             <h2>${prod.title}</h2>
//             <h3>\$${prod.price}</h3>
//             <p>${prod.desc}</p>
//             <button>Add to Cart</button>
//             </div>
//             </div>
//             `;
//       prodList.append(prodEl);
//     }
//     renderHook.append(prodList);
//   },
// };

// productList.render();

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    // console.log("Adding Product to Cart");
    // console.log(this.product);

    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
              <div>
              <img src="${this.product.imageUrl}" alt="${this.product.title}"/>
              <div class="product-item-info">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.desc}</p>
              <button>Add to Cart</button>
              </div>
              </div>
              `;

    const addCardButton = prodEl.querySelector("button");
    addCardButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "a pillow",
      "19.9",
      "a soft pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg"
    ),
    new Product(
      "a carpet",
      "89.9",
      "A carpet which you might like - or not.",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg"
    ),
  ];
  constructor() {} // convert field to property automatically
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      // const prodEl = document.createElement("li");
      // prodEl.className = "product-item";
      // prodEl.innerHTML = `
      //           <div>
      //           <img src="${prod.imageUrl}" alt="${prod.title}"/>
      //           <div class="product-item-info">
      //           <h2>${prod.title}</h2>
      //           <h3>\$${prod.price}</h3>
      //           <p>${prod.desc}</p>
      //           <button>Add to Cart</button>
      //           </div>
      //           </div>
      //           `;
      // prodList.append(prodEl);
      console.log(prod);
      const productItem = new ProductItem(prod);

      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    // renderHook.append(prodList);
    return prodList;
  }
}

// const productList = new ProductList();
// productList.render();

// const obj = {
//   title: "mani",
//   render() {
//     console.log(obj.title);

//   },
// };

// obj.render();
// whenever we have to access a method or property of object/class
// we have to access it through obj/class
//obj.property/method

//when we create object as instance of class whithout having
// static in it then we have to access the method in it
// with obj
//but if we have method with static keyword in it then
// we can also call this method with class
//className.method()
// the static method in class add the static field in class
// the field with static keyword can access with className

class ShopingCart {
  item = [];
  addProduct(product) {
    this.item.push(product);
    // this.totalOutput.textContent = `Total:\$${1}`;
    this.totalOutput.innerHTML = `<h2>Total:\$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.className = "cart";
    cartEl.innerHTML = `
    <h2>Total:\$${0}</h2>
    <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShopingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const productListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(productListEl);
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

// in static this always refer to class

App.init();
