var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    _count: 0, 
    _storage:{}
  };
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value){
    this._storage[this._count] = value;
    this._count++;
  },
  pop: function(){
    if(this._count > 0){
      this._count--;
      var value = this._storage[this._count];
      delete this._storage[this._count];
      return value;
    }
  },
  size: function(){
    return this._count;
  }
};
