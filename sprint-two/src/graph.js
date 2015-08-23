

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  //this = Object.create(Graph.prototype);
  //return this;
};


// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this[node] = {};
  this[node].value = node;
  this[node].edge = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return node in this;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this[fromNode].edge, toNode) || _.contains(this[toNode].edge, fromNode);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edge.push(toNode);
  this[toNode].edge.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromArray = this[fromNode].edge;
  var toArray = this[toNode].edge;
  this[fromNode].edge = fromArray.slice(0,_.indexOf(fromArray,toNode)).concat(fromArray.slice(_.indexOf(fromArray,toNode)+1));
  this[toNode].edge = toArray.slice(0,_.indexOf(toArray,fromNode)).concat(toArray.slice(_.indexOf(toArray,fromNode)+1));
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this, function (item){
    cb(item.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 - all constant, exception of forEachNode, which is linear.
 */



