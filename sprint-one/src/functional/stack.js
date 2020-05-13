var Stack = function() {
  var someInstance = {};
  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    if (length > 0) {              // Only perform pop actions if the stack has data
      length--;
      var data = storage[length];
      delete storage[length];      // Don't forget to delete from storage!
      return data;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
