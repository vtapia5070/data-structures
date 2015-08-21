var Queue = function(){
  var someInstance = {};
  var _back = 0; // _back always points to the position after last person in the Q
  var _front = 0; // _front points to the first position in the Q

  // Use an object with numeric keys to store values
  var _storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    _storage[_back] = value;
    _back++;
  };

  someInstance.dequeue = function(){
    if(_back > _front) {
      var value = _storage[_front];
      delete _storage[_front];
      _front++;
      return value;
    }
  };

  someInstance.size = function(){
    return _back - _front;
  };

  return someInstance;
};
