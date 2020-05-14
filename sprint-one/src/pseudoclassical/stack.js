// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };


var Stack = function() {
  this.storage = {};
  this.length = 0;
}

// Adds a value to the end of the chain
Stack.prototype.push = function(value) {
  // Check to see if value is defined
  // if (value) {
      this.storage[this.length] = value;
      this.length++;
  // }
}

// Removes a value from the beginning of the chain
Stack.prototype.pop = function() {
  // Check to see if queue is empty
  if(this.length > 0){
    this.length--;
    var data = this.storage[this.length];
    delete this.storage[this.length];
    return data;
  }
}


// Returns the length of the queue
Stack.prototype.size = function() {
  return this.length;
}








