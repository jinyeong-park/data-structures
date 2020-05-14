// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var queueMethods = {};

var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.first = 0;
  someInstance.last = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.last] = value;
    this.last++;
  },
  dequeue: function() {
    if (this.last > this.first) {
      var data = this[this.first];
      delete this[this.first];
      this.first++;
      return data;
    }

  },
  size: function() {
    return this.last - this.first;
  }
};


