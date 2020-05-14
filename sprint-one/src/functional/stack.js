var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  //key: push, value: function(value)
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {              // Only perform pop actions if the stack has data
      size--;
      var data = storage[size];
      delete storage[size];      // Don't forget to delete from storage!
      return data;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

// var x = Stack(); //returns new instance of a Stack
// x.push(7);
