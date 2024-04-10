class Product {
  //   title;
  //   price;
  //   desc;
  constructor(title, img, description, price) {
    this.title = title;
    this.price = price;
    this.imgUrl = img;
    this.desc = description;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
    <div>
    <img src="${this.product.imgUrl}" alt="${this.product.title}"/>
    <div class="product-item-info">
    <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.desc}</p>
              <button>Add to Cart</button>
              </div>
              </div>
    `;

    const addCartButton = prodEl.querySelector("button");
    // addCartButton.addEventListener("click", this.addToCart.bind(this));
    addCartButton.addEventListener("click", () => {
      this.addToCart();
    });
    // arrow function does not know this so addCartbutton will not be associated with it
    // and this in addTOCart() function will refer to the object that is calling it

    return prodEl;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  render() {
    const prodLi = document.createElement("ul");
    for (const prod of this.products) {
      const prodEl = new ProductItem(prod).render();

      prodLi.append(prodEl);
    }
    return prodLi;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodLi = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodLi);
  }
}

class ShoppingCart {
  //the order of class does not matter it just have to define
  // all class before from where the code start executing
  items = [];

  set cartItem(value) {
    this.items = value;
    this.totalOutput.innerHTML = `TOtal\$${this.totalAmount.toFixed(2)}`;
    //    .toFixed(2) convert the number to string and only display it to
    // 2 decimal places
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, currentItem) => {
      return prevValue + currentItem.price;
    }, 0);
    return sum;
  }

  addProduct(product) {
    // this.items.push(product);
    // this.totalOutput.innerHTML = `Total:\$${1}`;
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItem = updatedItems;
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

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
