var Stack = function(){
  var someInstance = {};
  var _count = 0;
  // Use an object with numeric keys to store values
  var _storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    _storage[_count] = value;
    _count++;
  };

  someInstance.pop = function(){
    if (_count > 0){
      _count--;
      var popped = _storage[_count];
      delete _storage[_count];
      return popped;
    }
  };

  someInstance.size = function(){
    return _count;
  };

  return someInstance;
};
