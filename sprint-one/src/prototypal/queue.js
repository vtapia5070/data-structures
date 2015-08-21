var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj._front = 0;
  obj._back = 0;
  obj._storage = {};
  return obj;
};

var queueMethods = {
  enqueue: function(value){
    this._storage[this._back] = value;
    this._back++;
  },
  dequeue: function(){
    if (this._back > this._front) {
      var value = this._storage[this._front];
      delete this._storage[this._front];
      this._front++;
      return value;
    }
  },
  size: function(){
    return this._back - this._front;
  }
};