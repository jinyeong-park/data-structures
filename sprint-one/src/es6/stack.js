// class Stack {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   constructor() {
//   }

// }

class Stack extends Array {
  peek() {
      return this[this.length -1];
  }

  isEmpty() {
      return this.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.isEmpty();

const stack1 = new Stack(1,2,3,4);