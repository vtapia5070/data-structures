var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};
//set.add("susan sarandon");

setPrototype.add = function(item){
  // if set is undefined set to empty
  if (this._storage === undefined) {
    this._storage = [];
  }
  // if storage does not contain item, then push item to storage
  if(!_.contains(this._storage, item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  // use underscore contains to check if storage contains item
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item){
  //set storage to  = _.reject (reject items === item)
  this._storage = _.reject(this._storage, function(value){
    return item === value;
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 add - constant
 remove - linear
 contains - linear
 */
