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

class MainStore {
  constructor(name) {
    this.name = name;
    this.list = [];
    this.earnings = 0;
  }

  addItem(item) {
    this.list.push(item);
    // return this;
  }

  showInventory() {
    console.log(this.list);
  }
  //   restockItem();
  //   sellItem();
}

class Book {
  constructor(title, quantity, value) {
    this.title = title;
    this.quantity = quantity;
    this.value = value;
  }
}

class BookStore extends MainStore {
  constructor(name) {
    super(name);
  }
  addBook(title, quantity, value) {
    let newBook = new Book(title, quantity, value);
    super.addItem(newBook);
  }
}

let store = new MainStore("Store");
let bookStore = new BookStore("NBS");

// let bookOne = new Book("A", 1, 100);
// let bookTwo = new Book("B", 2, 200);
// bookStore.addBook(bookOne);
// bookStore.addBook(bookTwo);

// store.addItem(book);

store.addItem(new Book("A", 1, 100));
store.showInventory();
