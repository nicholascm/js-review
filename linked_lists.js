log = console.log; 

// recursively reverse singly linked list

function Node(data, next) {
    this.data = data; 
    this.next = next; 
}

let three = new Node(3, null);
let two = new Node(2, three); 
let one = new Node(1, two); 

const reverseLinkedListRecursive = (node) => {
    if(node == null) return node; 
    if(node.next == null) return node;
    let rest = reverseLinkedListRecursive(node.next); 
    node.next.next = node;
    node.next = null; 
    return rest;
}

// 1 -> 2 -> 3 -> null

// reverse at 1 is reverse(2) and set 1.next.next = 1, 1.next = null
// rev at 2 is reverse(3) and set 2.next.next = 2, 2.next = null
// reverse at 3 is 3 just 3

log(reverseLinkedListRecursive(one));