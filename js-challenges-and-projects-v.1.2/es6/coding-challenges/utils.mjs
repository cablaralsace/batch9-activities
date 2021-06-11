export let mainStoreMixin = {
  totalEarnings() {
    console.log(`\n${this.name} has PHP ${this.earnings} total earnings.`);
  },
};

export let bookStoreMixin = {
  addNotif(title, quantity) {
    console.log(`\nADDED: Title: ${title}, Qty: ${quantity} pieces`);
  },

  restockSuccess(title, quantity) {
    console.log(`\nRESTOCK SUCCESS: Title: ${title}, Qty: ${quantity} pieces`);
  },

  restockError(title) {
    console.log(`\nRESTOCK ERROR: Please add ${title} to the inventory first.`);
  },

  sellSuccess(title, quantity) {
    console.log(
      `\nSUCCESSFUL TRANSACTION: Sold ${quantity} pieces of ${title}.`
    );
  },

  sellErrorLessStock(title, quantity) {
    console.log(
      `\nSALE STOCK ERROR: ${title} has only ${quantity} stock/s left.`
    );
  },

  sellErrorNoStock(title) {
    console.log(`\nSALE ERROR: Sorry, we do not carry ${title} in our store.`);
  },

  totalEarnings() {
    console.log(`\n${this.name} has PHP ${this.earnings} total earnings.`);
  },
};
