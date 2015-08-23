var BinarySearchTree = function(value){
  //lower num to the left & higher num to right
  var bst = {};
  bst.value = value;
  bst.left = undefined;
  bst.right = undefined;

  bst.insert = function(value){

    //recursive function to check
    var zoneIn = function(node, value){
      //compare values
      //if value is greater assign to this.right
      if (value > node.value) {
        //check if node.right is empty
        if (node.right === undefined) {
          node.right = BinarySearchTree(value);
        } else {
          //recursively call node.right to find empty spot
          zoneIn(node.right, value);
        }
      }
      //compare values
      if (value < node.value) {
        // check if node.left is empty
        if (node.left === undefined) {
          //assign value to node.left
            node.left = BinarySearchTree(value);
        } else {
          // call zoneIn with child node
            zoneIn(node.left, value);
        }
      }
    };

    zoneIn(this, value);

  };

  bst.contains = function(value){
    // create recursive function to traverse into the tree
    var checkValue = function(node, value){
      // check if value equals this.value, true if equal
      if (value === node.value){
        return true;
      } else if (value < node.value){
        if (node.left !== undefined){
          return checkValue(node.left, value);
        } else {
          return false;
        }
      } else if (value > node.value){
        if (node.right !== undefined) {
          return checkValue(node.right, value);
        } else {
          return false;
        }
      }
    };

    return checkValue(this, value);

  };

  bst.depthFirstLog = function(cb){
    //create function to recurse over every node
    var each = function(node, cb) {
      //apply cd on node
      cb(node.value);
      if (node.left !== undefined) {
        each(node.left, cb);
      }
      if (node.right !== undefined) {
        each(node.right, cb);
      }
    };
    each(this, cb);
  };

  return bst;

};



/*
 * Complexity: What is the time complexity of the above functions?
 insert & contains - logarithmic
 depthFirstLog - linear
 */
