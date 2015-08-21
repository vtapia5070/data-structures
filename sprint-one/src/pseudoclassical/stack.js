var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._count = 0;
  this._storage = {};
};

Stack.prototype.push = function(value){
  this._storage[this._count] = value;
  this._count++;
};

Stack.prototype.pop = function(){
  if(this._count > 0){
    this._count--;
    var value = this._storage[this._count];
    delete this._storage[this._count];
    return value;
  }
};

Stack.prototype.size = function(){
  return this._count;
};