// https://medium.com/@kevincennis/how-to-impress-me-in-an-interview-4fc00e96413

log = console.log;
// write a function called partial that makes teh following snippet work

function add(a,b) {
    return a+b; 
}

var add5 = partial(add, 5); 

add5(4);  // 9
log(add5(4));
function partial(func, a) {
    return function(b) {
        return func(a, b); 
    }; 
}

//make a class called 'Square' that inherits from 'Rectangle' and satisfies the following snippet

function Rectangle(width, height) {
    this.width = width; 
    this.height = height; 
}

Rectangle.prototype.area = function() {
    return this.width * this.height; 
}

//answer here 
function Square(length) {
    Rectangle.call(this, length, length); 
}

Square.prototype = Object.create(Rectangle.prototype); 
var square = new Square(4); 

var square = new Rectangle(4, 4); 

//answer above
log(square.area());  // 16
log(Square.prototype.area === Rectangle.prototype.area); //true
log(Square.prototype.area);
log(Rectangle.prototype.area);  

// Understand call, apply and this


//async

// how would you design a linked list in javascript? 

function LinkedList(head) {
    this.head = head; 
    this.length; 
}

LinkedList.prototype.addNode = function(newNode) {
    let current = this.head; 
    while(current.next != null) {
        current = current.next; 
    }
    current.next = newNode; 
    return newNode; 
}

LinkedList.prototype.removeNode = function() {

}

LinkedList.prototype.searchForNode = function() {

}

function Node(data, next) {
    this.data = data; 
    this.next = next; 
}

let node = new Node(5); 
let newList = new LinkedList(node); 
console.log(newList); 
let newNode = new Node(10); 
newList.addNode(newNode); 
console.log(newList); 

//write a function that removes duplicates from an array 

const countUniqueItems = (arr) => {
    let hash = {}; 
    arr.forEach(x => {
        if(Object.keys(hash).indexOf(x) >= 0) {
            hash[x]++; 
        } else {
            hash[x] = 1; 
        }
    }); 
    return hash; 
}

log(countUniqueItems(['bob', 'bob', 'lynn', 'nick', 'cassie', 'fulton', 'nick']));

const removeDuplicates = (arr) => {
    let removed = []; 
    arr.forEach(function(item) {
        if(removed.indexOf(item) < 0) {
            removed.push(item); 
        }
    }); 

    return removed; 
}
const names = ['bob', 'bob', 'lynn', 'nick', 'cassie', 'fulton', 'nick']; 
log(removeDuplicates(names));

const filter = (arr, func) => {
    let filtered = []; 
    arr.forEach(function(x) {
        if(func(x)) {
            filtered.push(x); 
        }
    });
    return filtered; 
}

log(filter(names, x => x[0] == 'l')); 

// write a mul function which will provide the following results

// console.log(mul(2)(3)(4)); // output : 24 
// console.log(mul(4)(3)(4)); // output : 48

const mul = (num) => {
    return function(secondNum) {
        return function(thirdNum) {
            return num * secondNum * thirdNum; 
        }
    }
}