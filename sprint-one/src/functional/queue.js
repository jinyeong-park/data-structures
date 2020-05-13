var Queue = function() {
  var someInstance = {};
  var elements = [];

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

// enqueue(string) - Add a string to the back of the queue
// dequeue() - Remove and return the string at the front of the queue
// size() - Return the number of items in the queue
  someInstance.enqueue = function(value) {
   return elements.push(value);
  };

  someInstance.dequeue = function() {
    return elements.shift();
  }

  someInstance.size = function() {
    return elements.length;
  };

  return someInstance;
};


