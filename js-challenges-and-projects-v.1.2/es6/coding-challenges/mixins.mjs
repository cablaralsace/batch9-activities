import { mainStoreMixin, bookStoreMixin } from "./utils.mjs";

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
    bookStoreMixin.addNotif(title, quantity);
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
      bookStoreMixin.restockSuccess(title, quantity);
    } else {
      bookStoreMixin.restockError(title);
    }
  }

  sellBook(title, quantity) {
    let availableBook = this.findBook(title);
    if (availableBook) {
      if (quantity > availableBook.quantity) {
        bookStoreMixin.sellErrorLessStock(title, availableBook.quantity);
      } else {
        availableBook.quantity -= quantity;
        this.earnings = quantity * availableBook.value;
        this.parentStore.earnings = this.earnings;
        bookStoreMixin.sellSuccess(title, quantity);
      }
    } else {
      bookStoreMixin.sellErrorNoStock(title);
    }
  }
}

Object.assign(MainStore.prototype, mainStoreMixin);
Object.assign(BookStore.prototype, bookStoreMixin);

let store = new MainStore("Main Store");
let bookStore = new BookStore("Fully Booked", store);

store.totalEarnings();
bookStore.addBook("Twilight", 5, 100);
// store.listInventory();

bookStore.restockBook("Twilight", 3);
// store.listInventory();
// bookStore.restockBook("New Moon", 5);

// // console.log(bookStore);

bookStore.sellBook("Twilight", 9);
// store.listInventory();
// bookStore.sellBook("New Moon", 1);
// bookStore.sellBook("Twilight", 10);

// store.totalEarnings();
// bookStore.totalEarnings();
