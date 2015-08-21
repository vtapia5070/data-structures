var Queue = function(){
  var someInstance = {};
  var back = 0; // back always points to the position after last person in the Q
  var front = 0; // front points to the first position in the Q

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function(){
    if(back > front) {
      var value = storage[front];
      delete storage[front];
      front++;
      return value;
    }
  };

  someInstance.size = function(){
    return back - front;
  };

  return someInstance;
};
