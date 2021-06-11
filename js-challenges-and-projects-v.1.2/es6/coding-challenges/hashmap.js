class HashMap {
  constructor() {
    this.map = {};
  }

  hash(k) {
    return k % 10;
  }

  add(key, value) {
    let k = this.hash(key);
    if (!this.map[k]) {
      this.map[k] = [];
    }
    this.map[k].push(value);
  }

  get(key) {
    let k = this.hash(key);
    return this.map[k];
  }
}

let h = new HashMap();

h.add(10, "hello");
h.add(100001, "world");
h.add(1, "this is a string");

console.log(h);

// === output ===

// HashMap {
//   map: { '0': [ 'hello' ], '1': [ 'world', 'this is a string' ] }
// }
//
