const log = console.log; 

function Node(data) {
    this.data = data; 
    this.parent = null; 
    this.children = []; 
}

Node.prototype.addChild = function() {

}

function Tree(data) {
    let node = new Node(data); 
    this._root = node; 
}


Tree.prototype.traverseDF = function(node, func) {
    if(func) {
        func(node); 
    }
    node.children.forEach((child) => {
        this.traverseDF(child, func); 
    }); 

}

Tree.prototype.search = function(value, node) {
    if(node.data === value) {
        return node; 
    }
    node.children.forEach((child) => {
        log(child); 
        let found = this.search(value, child); 
        if(found) {
            return found; 
        }
    }); 
}

var tree = new Tree('one');
 
var tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];
 
/*
 
creates this tree
 
 one
 ├── two
 │   ├── five
 │   └── six
 ├── three
 └── four
     └── seven
 
*/

// log(tree.traverseDF(tree._root, function(node) {
//     console.log(node.data); 
// }))

log(tree.search('two', tree._root)); 