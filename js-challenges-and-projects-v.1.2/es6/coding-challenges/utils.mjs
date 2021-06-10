export let storeMixin = {
  add() {
    console.log(
      `Successfully added ${this.quantity} stocks/s of ${this.title}.`
    );
  },

  restock() {
    console.log(
      `Successfully restocked. You now have ${this.quantity} stocks of ${this.title} left.`
    );
  },
  sell() {},

  //   errors() {},
};
