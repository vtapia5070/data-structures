var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  // extend newTree with treeMethods
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){

  if (target === this.value){
    return true;
  }

  if (this.children.length > 0){
    var flag = false;
    for (var i = 0; i < this.children.length; i++) {
      flag = flag || this.contains.call(this.children[i], target);
    }
    return flag;
  }

  return false;

};


/*
 * Complexity: What is the time complexity of the above functions?
addChild = constant
contains = logarithmic
 */
