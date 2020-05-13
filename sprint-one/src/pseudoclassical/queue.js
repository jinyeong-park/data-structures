// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };


// This Stack is written using the pseudoclassical pattern


// Pseudo Code
// Create Queue constructor
//   Define storage, count, and lowest count

// Create enqueue method (value)
//   Add value to queue
//   Increment count

// Create dequeue method
//   Save node to delete in var
//   Delete node
//   Increment lowest count
//   Return saved node

// Create size method
//   Return count minus lowest count

// Creates the queue
var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.lowestCount = 0;
}

// Adds a value to the end of the chain
Queue.prototype.enqueue = function(value) {
  // Check to see if value is defined
  if (value) {
      this.storage[this.count] = value;
      this.count++;
  }
}

// Removes a value from the beginning of the chain
Queue.prototype.dequeue = function() {
  // Check to see if queue is empty
  if (this.count - this.lowestCount === 0) {
      return undefined;
  }

  var result = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  return result;
}

// Returns the length of the queue
Queue.prototype.size = function() {
  return this.count - this.lowestCount;
}