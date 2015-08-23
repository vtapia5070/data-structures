var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var inserted = false;
  //cheack if storage[i] is empty
  if(this._storage[i] === undefined) {
    //set storage[i] to empty array
    this._storage[i] = [];
  }

  //loop through storage[i] to check if key is already saved
  _.each(this._storage[i], function(item){
    if(item[0] === k) {
      item[1] = v;
      inserted = true;
    }
  });

  if(!inserted){
    this._storage[i].push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //loop thru storage[i]
  for (var j = 0; j < this._storage[i].length; j++) {
    var pair = this._storage[i][j];
    //check if storage[i][0] matches k
    if (pair[0] === k) {
      //return calue at index 1
      return pair[1];
    }
  }
};

HashTable.prototype.remove = function(k){
  //generate the hash index of k
  var i = getIndexBelowMaxForKey(k, this._limit);
  //remove array value at the index by reassigning it to null
  for (var j = 0; j< this._storage[i].length; j++) {
    var pair = this._storage[i][j];
    if (pair[0] === k) {
      pair[1] = null;
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 - all linear if a collision occurs, constant otherwise
 */
