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

class ElementAttribute {
  constructor(atrName, atrValue) {
    this.name = atrName;
    this.value = atrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.renderHookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  // we don't have to add a empty method because subclass have this method
  // but we are writing it just for convienience
  // in above method calling if we access a value of field of subClass then
  // it will give error because field got convertd to properties
  // after patent class(base class) constructor got completelly execute
  // after super() call execution

  createRootElement(tag, tagClass, attributes) {
    //attributes store a array
    const rootElement = document.createElement(tag);
    if (tagClass) {
      rootElement.className = tagClass;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    console.log(this.renderHookId);
    const hook = document.getElementById(this.renderHookId);
    hook.append(rootElement);
    return rootElement;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }
  render() {
    // const prodEl = document.createElement("li");
    // prodEl.className = "product-item";
    const prodEl = this.createRootElement("li", "product-item");
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
    addCartButton.addEventListener("click", this.addToCart);

    return prodEl;
  }

  //   addToCart() {
  //     App.addProductToCart(this.product);
  //   }
  // arrow function don't know this so eventlistner can't bind it
  // here this in addToCart function will refer to the instance of ProductItem
  addToCart = () => {
    App.addProductToCart(this.product); //in class arrow fuction this will refer to the object created by class
    console.log(this);
  };
}

class ProductList extends Component {
  #products = [];
  fetchProduct() {
    this.#products = [
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
    this.renderProduct();
  }

  //   render() {
  //     const prodLi = document.createElement("ul");
  //     for (const prod of this.products) {
  //       const prodEl = new ProductItem(prod).render();

  //       prodLi.append(prodEl);
  //     }
  //     return prodLi;
  //   }
  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
    this.fetchProduct();
  }

  renderProduct() {
    for (const prod of this.#products) {
      // const prodEl = new ProductItem(prod, "prod-list").render();
      new ProductItem(prod, "prod-list");

      // prodLi.append(prodEl);
    }
  }
  render() {
    const prodLi = this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    if (this.#products && this.#products.length > 0) {
      // for (const prod of this.products) {
      //   console.log(prodLi);
      //   // const prodEl = new ProductItem(prod, "prod-list").render();
      //   new ProductItem(prod, "prod-list");
      //   // prodLi.append(prodEl);
      // }

      this.renderProduct();
      // } else {
      //   this.fetchProduct();
      // }
    }
  }
}

class Shop {
  constructor() {
    this.render();
  }
  render() {
    // const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart("app");
    // const cartEl = this.cart.render();
    // renderHook.append(cartEl);
    const productList = new ProductList("app");

    // const prodLi = productList.render();
    // renderHook.append(prodLi);
  }
}

class ShoppingCart extends Component {
  //the order of class does not matter it just have to define
  // all class before from where the code start executing
  items = [];

  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
  }

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

  orderNowHandler = () => {
    console.log("ordering now");
    console.log(this.items);
  };

  render() {
    // const cartEl = document.createElement("section");
    // cartEl.className = "cart";

    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
    <h2>Total:\$${0}</h2>
    <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
    const orderNowButton = cartEl.querySelector("button");
    orderNowButton.addEventListener("click", this.orderNowHandler);
    return cartEl;
  }
}

class App {
  static init() {
    const shop = new Shop();
    // shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

// when we call render in  constructor of subclass it is constructor of that subclass
// but when we call render in base class then the method got overwritten
// in subclass and that got called  ,it got called before it add the
//property of subClass
//when we override the method in subclass then the base class method
// got replaced by it

// we declare properties /method as private by using #
// then it will be accesseble only inside that class
// when we have to access that property then we have to use #property

//pseudo-private
// before # we used to _ for private properties but it just a syntax to
// show that property is private by user and it should not access outside of it
//but we can access it outside it(class)
//it not really become a private property
