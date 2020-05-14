// class Stack {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   constructor() {
//   }

// }

class Stack {

  // Array is used to implement stack
  constructor()
  {
      this.items = [];
  }

  // Functions to be implemented
  // push(item) : Adds an element to the stack
    push(element) {
        // push element into the items
        this.items.push(element);
    }
  // pop() : Removes an element from the stack, if the function is call on an empty stack it indicates “Underflow”
    pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
  }
  // size()
   size() {
    return this.items.length;
  };

}

