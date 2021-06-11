class Queue {
  data = [];
  maxSize;

  constructor(initialData, maxSize = -1) {
    this.data = Array.isArray(initialData) // isArray checks if initialData is an array data type
      ? initialData
      : typeof initialData == "undefined"
      ? [] //kung undefined yung initialData, ipapasok niya sa empty array
      : [initialData]; //kung array na yung initialData, ididisplay niya pa din as Array

    console.log(this.data);
    this.maxSize = maxSize;
  }

  isFull() {
    console.log(this.maxSize != -1); //true
    console.log(this.data.length == this.maxSize); //false
    return this.maxSize != -1 ? this.data.length == this.maxSize : false;
  }

  isEmpty() {
    return this.data.length == 0;
  }

  enqueue(item) {
    if (this.isFull()) {
      return false;
    }
    this.data.push(item);
    console.log(`Enqueue: [${this.data}]`);
  }

  *generator() {
    while (!this.isEmpty()) {
      yield this.data.shift(); //papalabasin yung unang laman ng array
    }
  }

  dequeue() {
    const { value, done } = this.generator().next();
    if (done) return false;
    console.log(`Dequeue: [${this.data}]`);
    return value;
  }
}

let q = new Queue(3, 2); //maxSize: 2
q.enqueue(1);
q.enqueue(2); //ignored kasi puno na yung array
// let q1 = new Queue([3, 2, 1], 10);
// let q2 = new Queue();

let x = 0;

while ((x = q.dequeue())) {
  console.log(x);
}
