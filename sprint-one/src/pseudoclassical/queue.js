// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };


// This Stack is written using the pseudoclassical pattern

// Creates the queue
var Queue = function() {
  // Create Queue constructor (Define storage, first, and last)
  this.storage = {};
  this.firstIdx = 0;
  this.lastIdx = 0;

};

Queue.prototype.enqueue = function(value) {
  // Add value to queue &  Increment count
  this.storage[this.lastIdx] = value;
  this.lastIdx++;
};

Queue.prototype.dequeue = function() {
  if (this.lastIdx > this.firstIdx) {
    // Save node to delete in var & delete node & increment first & return saved node
    var data = this.storage[this.firstIdx];
    delete this.storage[this.firstIdx];
    this.firstIdx++;
    return data;
  }
};

Queue.prototype.size = function() {
  return this.lastIdx - this.firstIdx;
};
