// Class names START WITH CAPITAL letters
//by default Public class
//if i-declare na private, hindi magagamit sa ibang file

//example 1
// class CoolGuy {
//   constructor(trick) {
//     this.specialTrick = trick;
//   }

//   showOff() {
//     console.log(this.specialTrick);
//   }
// }

// let Joe = new CoolGuy("jumping rope");
// Joe.showOff();

// class Vehicle {
//   constructor() {
//     this.engines = 1;
//   }

//   ignition() {
//     console.log(`Turning on my engine ${this.engines}.`);
//   }

//   drive() {
//     this.ignition();
//     console.log("Steering and moving forward!");
//   }
// }

// class Car extends Vehicle {
//   constructor() {
//     super();
//     this.wheels = 4;
//   }

//   drive() {
//     super.drive();
//     console.log(`Rolling on all ${this.wheels} wheels!`);
//   }
// }

// // let car = new Car();
// // car.drive();

// class SpeedBoat extends Vehicle {
//   constructor() {
//     super();
//     this.engines = 2;
//   }

//   ignition() {
//     console.log(`Turning on my ${this.engines} engines.`);
//   }

//   pilot() {
//     super.drive();
//     console.log(`Speeding through the water with ease`);
//   }
// }

// let boat = new SpeedBoat();
// boat.pilot();
// import { storeMixin } from "./utils.mjs";
// Object.assign(Book.prototype, storeMixin);

class MainStore {
  constructor(name) {
    this.name = name;
    this.list = [];
    this.earnings = 0;
  }

  addItem(item) {
    this.list.push(item);
    return this;
  }

  listInventory() {
    for (let i = 0; i < this.list.length; i++) {
      console.log(
        `[Title: "${this.list[i].title}", Stocks left: ${this.list[i].quantity}]`
      );
    }
  }

  totalEarnings() {
    console.log(`${this.name} has PHP ${this.earnings} total earnings.`);
  }
}

class Book {
  constructor(title, quantity, value) {
    this.title = title;
    this.quantity = quantity;
    this.value = value;
  }
}

class BookStore extends MainStore {
  constructor(name, parentStore) {
    super(name);
    this.parentStore = parentStore;
  }

  addBook(title, quantity, value) {
    let newBook = new Book(title, quantity, value);
    super.addItem(newBook); //mapupunta sa BookStore
    store.addItem(newBook); //mapupunta sa MainStore
    return this;
  }

  findBook(title) {
    const findBook = this.list.find((book) => book.title === title);
    return findBook; //returns true if makita yung title ng book sa listahan
  }

  restockBook(title, quantity) {
    let availableBook = this.findBook(title);
    if (availableBook) {
      availableBook.quantity += quantity;
    } else {
      console.log(
        `Sorry ${title} is not yet in our inventory. Please add it first.`
      );
    }
  }

  sellBook(title, quantity) {
    let availableBook = this.findBook(title);
    if (availableBook) {
      if (quantity > availableBook.quantity) {
        console.log(
          `${title} has only ${availableBook.quantity} stock/s left.`
        );
      } else {
        availableBook.quantity -= quantity;
        this.earnings = quantity * availableBook.value;
        this.parentStore.earnings = this.earnings;
        console.log(`Successful Transaction!`);
      }
    } else {
      console.log(`Sorry, we don't have ${title}.`);
    }
  }

  totalEarnings() {
    console.log(`${this.name} has PHP ${this.earnings} total earnings.`);
  }
}

let store = new MainStore("Store");
let bookStore = new BookStore("NBS", store);

// bookStore.addBook("A", 1, 100);
// bookStore.restockBook("A", 5);
// bookStore.restockBook("B", 5);

// bookStore.sellBook ("A", 2);
// bookStore.sellBook("B", 1);
// bookStore.sellBook ("A", 10);

// store.listInventory();

// store.totalEarnings();
// bookStore.totalEarnings;;
