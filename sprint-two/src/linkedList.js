var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value){
    //if list is empty (tail is null/head is null)
    //create new node assigned to tail & head
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    // Save the value from current node that head points to
    // Reassign head to point to next node
    if (list.head === null){
      return undefined;
    } else {
      var value = list.head.value;
      list.head = list.head.next;
      return value;
    }
  };

  list.contains = function(target){
    if (list.head === null) {
      return false;
    } else {
      var containsTarget = function (node, target){
        if (node.next === null) {
          return _.contains(node, target);
        } else {
          return _.contains(node, target) || containsTarget(node.next, target);
        }
      };
      return containsTarget(list.head, target);
    }
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null; //has to be changed

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: constant
 removeHead: constant
 contains: linear
 */
