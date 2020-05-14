// class Queue {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   constructor() {
//   }

// }


class Queue {
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }

    // Functions to be implemented
    // enqueue() – Adds an element to the queue
    enqueue(element) {
    this.items.push(element);
   }

    // dequeue() – Removes an element from the queue
    dequeue() {

    return this.items.shift();
    }

    size() {
      return this.items.length;
    }
};

