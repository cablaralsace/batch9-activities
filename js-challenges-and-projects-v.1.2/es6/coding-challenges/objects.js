// //constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     return `Hello ${this.name}`;
//   };

//   this.computeAge = function () {
//     return 2021 - this.age;
//   };
// }

// //instances
// let brad = new Person("Brad", 1999);
// let pitt = new Person("Pitt");

// console.log(brad.name);
// console.log(brad.greet());
// console.log(brad.computeAge());
// console.log(brad.computeAge().toString());
// console.log(pitt.name);

// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   this.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth);
//   };
// };

// var francis = new Person("Francis", 2000, "teacher");

// console.log(francis);
// console.log(francis.calculateAge());

//coding challenge bookstore
var store = {
  storeName: "National Bookstore",
  inventoryList: [],
  earnings: 0,
};

// var book = [
//   {
//     title: "Twilight",
//     quantity: 100,
//     value: 600,
//   },
// ];

// var addBook = function (title, quantity, value) {
//   let bookInformation = {};
//   bookInformation.title = title;
//   bookInformation.quantity = quantity;
//   bookInformation.value = value;
//   store.inventoryList.push(bookInformation);

//   this.restockBook = function () {
//     // for (let i = 0; i < store.inventoryList.length; i++) {
//     if (bookInformation.quantity > 0) {
//       console.log(
//         `You still have ${bookInformation.quantity} pieces of ${bookInformation.title} in the inventory.`
//       );
//     } else {
//       console.log(`Please restock ${bookInformation.title}.`);
//     }
//   };
//   // };

//   this.sellBook = function () {
//     //search for book
//     //deduct quantity
//     //add earnings
//     let element = store.inventoryList.find((el) => el.title === title);
//     if (element.quantity > 0) {
//       console.log(`Only ${element.quantity} stocks left.`);
//     }
//     element.quantity -= quantity;
//     store.earnings += quantity * element.value;
//     console.log(
//       `Successful Transaction! There are still ${element.quantity} stocks of ${bookInformation.title} left.`
//     );
//   };

//   this.listInventory = function () {
//     console.log(`${store.inventoryList}`);
//   };
// };

// function totalEarnings() {
//   console.log(`${store.storeName} has P${store.earnings} total earnings.`);
// }

// let twilight = new addBook("Twilight", 0, 500);
// let newMoon = new addBook("New Moon", 100, 500);
// // let eclipse = new addBook("Eclipse", 300, 500);
// let buyNewMoon = new addBook("New Moon", 3);

// // console.log(book);
// twilight.restockBook();
// newMoon.restockBook();
// buyNewMoon.sellBook();
// totalEarnings();
// console.log(store.listInventory());

var Book = function (title, quantity, value) {
  let bookInformation = {};
  bookInformation.title = title;
  bookInformation.quantity = quantity;
  bookInformation.value = value;

  this.addBook = function () {
    store.inventoryList.push(bookInformation);
  };

  this.restockBook = function () {
    // for (let i = 0; i < store.inventoryList.length; i++) {
    if (bookInformation.quantity > 0) {
      console.log(
        `You still have ${bookInformation.quantity} pieces of ${bookInformation.title} in the inventory.`
      );
    } else {
      console.log(`Please restock ${bookInformation.title}.`);
    }
  };
  // };
};

function sellBook(title, quantity) {
  let element = store.inventoryList.find((el) => el.title === title);
  if (element.quantity < quantity) {
    console.log(`Sorry, ${element.title} is currently out of stock.`);
    return;
  }
  element.quantity -= quantity;
  store.earnings += quantity * element.value;
  console.log(
    `Successful Transaction! There are now ${element.quantity} stocks of ${element.title} left.`
  );
}

function listInventory() {
  for (let i = 0; i < store.inventoryList.length; i++) {
    console.log(
      `[Title: ${store.inventoryList[i].title}, Stocks left: ${store.inventoryList[i].quantity}]`
    );
  }
}

function totalEarnings() {
  console.log(`${store.storeName} has P${store.earnings} total earnings.`);
}

let twilight = new Book("Twilight", 0, 500);
let newMoon = new Book("New Moon", 100, 500);
let eclipse = new Book("Eclipse", 50, 500);

twilight.addBook();
newMoon.addBook();
eclipse.addBook();

twilight.restockBook();
newMoon.restockBook();

sellBook("Twilight", 1);
sellBook("New Moon", 10);

listInventory();
totalEarnings();
