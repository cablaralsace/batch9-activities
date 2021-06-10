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
    return this;
  };
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
  console.log(`${store.storeName} has PHP ${store.earnings} total earnings.`);
}

let twilight = new Book("Twilight", 0, 500);
let newMoon = new Book("New Moon", 100, 500);
let eclipse = new Book("Eclipse", 50, 500);

twilight.addBook().addBook();
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
