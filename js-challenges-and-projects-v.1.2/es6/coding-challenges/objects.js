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

var Book = function (title, quantity, value) {
  let bookInformation = {};
  bookInformation.title = title;
  bookInformation.quantity = quantity;
  bookInformation.value = value;

  this.addBook = function () {
    store.inventoryList.push(bookInformation);
  };

  // this.checkStock = function () {
  //   // for (let i = 0; i < store.inventoryList.length; i++) {
  //   if (bookInformation.quantity > 0) {
  //     console.log(
  //       `You still have ${bookInformation.quantity} pieces of ${bookInformation.title} in the inventory.`
  //     );
  //   } else {
  //     console.log(`Please restock ${bookInformation.title}.`);
  //   }
  // };
  // };

  // this.restockBook = function (title, quantity) {
  //   for (let i = 0; i < store.inventoryList.length; i++) {
  //     if (store.inventoryList[i].title === title) {
  //       store.inventoryList[i].quantity += quantity;
  //     }
  //   }
  // };
};

function restockBook(title, quantity) {
  for (let i = 0; i < store.inventoryList.length; i++) {
    if (store.inventoryList[i].title === title) {
      store.inventoryList[i].quantity += quantity;
    }
  }
}

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

restockBook("New Moon", 300);
restockBook("Eclipse", 100);
// newMoon.restockBook();
// eclipse.restockBook();

sellBook("Twilight", 1);
sellBook("New Moon", 1);
sellBook("Eclipse", 3);

listInventory();
totalEarnings();

//bookstore exercise na sinagutan ng lahat
// function store(name, list, earnings) {
//   (this.name = name), (this.list = list), (this.earnings = earnings);
// }

// //create instance of store
// let sampleStore = new store("Avion Store", [], 0);

// function book(title, quantity, value) {
//   (this.title = title), (this.quantity = quantity), (this.value = value);
// }

// let mybook = new book("Harry Potter", 5, 500);

// store.prototype.addBook = function (title, quantity, value) {
//   let newBook = new book(title, quantity, value);
//   this.list.push(newBook);
// };

// sampleStore.addBook("Cinder", 10, 300);
// sampleStore.addBook("The Little Prince", 10, 300);
// sampleStore.addBook("Lord of the RIngs", 2, 500);

// store.prototype.restockBook = function (title, quantity) {
//   this.list.some((book) => {
//     if (book.title === title) {
//       book.quantity += quantity;
//     }
//   });
//   console.log(this.list);
// };

// sampleStore.restockBook("Cinder", 5);
// sampleStore.restockBook("Harry Potter", 4);

// // TODO
// //sell book
// // store.prototype.sellBook = function (title, quantity) {
// //   const bookIndex = this.list.findIndex((book) => book.title === title);

// //   if (bookIndex !== -1) {
// //     const {
// //       title: StoreTitle,
// //       quantity: Stock,
// //       value: Price,
// //     } = this.list[bookIndex];

// //     if (Stock < quantity) {
// //       console.log(`${StoreTitle} has only ${Stock} left`);
// //     } else {
// //       this.list[bookIndex].quantity -= quantity;
// //       this.earnings += quantity * Price;
// //     }
// //   } else {
// //     console.log(`We don't sell that book here`);
// //   }
// // };

// // store.prototype.sellBook = function (title, quantity) {
// //   let element = this.list.find((book) => book.title === title);
// //   if (element.quantity < quantity) {
// //     console.log(`Sorry, ${element.title} is currently out of stock.`);
// //     return;
// //   }
// //   element.quantity -= quantity;
// //   store.earnings += quantity * element.value;
// //   console.log(
// //     `Successful Transaction! There are now ${element.quantity} stocks of ${element.title} left.`
// //   );
// // };

// // store.prototype.sellBook = function (title, quantity) {
// //   this.list.some((book) => {
// //     if (book.title === title) {
// //       if (book.quantity < quantity) {
// //         console.log(
// //           `Transaction failed. Only ${book.quantity} stock/s left for ${title}.`
// //         );
// //       } else {
// //         book.quantity -= quantity;
// //         this.earnings += quantity * book.value;
// //         console.log(`Successful transaction for ${title}.`);
// //       }
// //     } else {
// //       console.log(`This ${title} is out of stock.`);
// //     }
// //   });
// // };

// store.prototype.sellBook = function (title, quantity) {
//   this.list.some((book) => {
//     if (book.title === title) {
//       if (book.quantity < quantity) {
//         console.log(
//           `Transaction failed. Only ${book.quantity} stock/s left for ${title}.`
//         );
//       } else {
//         book.quantity -= quantity;
//         this.earnings += quantity * book.value;
//         console.log(`Successful transaction for ${title}.`);
//       }
//     }
//   });
//   let bookTitle = this.list.some((book) => book.title === title);
//   if (!bookTitle) {
//     console.log(`${title} is out of stock.`);
//   }
// };

// // store.prototype.sellBook = function (title, quantity) {
// //   let bookTitle = this.list.some((book) => book.title === title);
// //   if (bookTitle.quantity < quantity) {
// //     console.log(
// //       `Transaction failed. Only ${book.quantity} stock/s left for ${title}.`
// //     );
// //   } else if (!bookTitle) {
// //     console.log(`${title} is out of stock.`);
// //   } else {
// //     book.quantity -= quantity;
// //     this.earnings += quantity * book.value;
// //     console.log(`Successful transaction for ${title}.`);
// //   }
// // };

// sampleStore.sellBook("Cinder", 10);
// sampleStore.sellBook("The Little Prince", 20);
// sampleStore.sellBook("Harry Potter", 15);

// store.prototype.totalEarnings = function () {
//   console.log(`Store name is ${this.name} with earnings of ${this.earnings}`);
// };

// sampleStore.totalEarnings();

// store.prototype.listInventory = function () {
//   this.list.map((book) => {
//     console.log(`${book.title}, ${book.quantity}, ${book.value}`);
//   });
// };

// sampleStore.listInventory();
