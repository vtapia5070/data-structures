var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj.front = 0;
  var obj.back = 0;
  var obj.storage = {};

  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.back] = value;
    this.back++;
  },
  dequeue: function(){
    if (this.back > this.front) {
      var value = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return value;
    }
  },
  size: function(){
    return this.back - this.front;
  }
};
