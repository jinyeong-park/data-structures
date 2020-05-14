// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var stackMethods = {};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instances = {
    storage: {},
    count: 0
  };

  _.extend(instances, stackMethods);

  return instances;
};

var stackMethods = {
  push: function(value){
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function(){
    if(this.count > 0){
      this.count--;
      var trash = this.storage[this.count];
      return trash;
    }
  },

  size: function(){
    return this.count;
  }
};


