// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var queueMethods = {};





var Queue = function(queueName, comment){

  // You can use object literal notation for `instance` (instead of dot notation),
  // but then we have to use `this` and we lose the privacy of closure scope
  // (e.g., `storage` is no longer private), so this kind of sucks.
  var instance = {
    name: queueName,
    annotation: comment,
    head: 0,
    tail: 0,
    storage: {}
  };

  // The _.extend() function is provided by the Underscore.js library
  _.extend(instance, queueMethods);

  return instance;
};

// The object below stores methods that could be shared with other classes
var queueMethods = {
  enqueue: function(data){
    this.storage[this.tail] = data;
    this.tail++;
    // The tail points to the next EMPTY "spot" for data to be stored
    // it does NOT point to the last OCCUPIED "spot" in the storage
  },
  dequeue: function(){
    if(this.head <= this.tail){  // Check the queue's size
      var data = this.storage[this.head];

      // Deleting is even more important for queues than for stacks
      // (memory leaks are a bigger threat for queues)
      delete this.storage[this.head];
      this.head++;
      return data;
    }
  },
  size: function(){
    return this.tail - this.head;
  }
};