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
5;
