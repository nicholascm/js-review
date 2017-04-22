// in JS, all functions are objects, which means they have properties
const log = console.log; 

function foo() {

}

console.log(typeof foo.prototype); //functions always are initialized with 
// a property called 'prototype' which is an empty object
log(typeof foo); // function

function Pig() {

}

var wilbur = new Pig(); 

Pig.prototype.squeal = function() {
    log('weeeeee'); 
}

wilbur.squeal(); 

//Javascript uses 'differential inheritance', objects aren't copied from parent to child
//children retain a link to their parent

//wilbur doesn't have a squeal property

log('Does wilbur have a squeal?', wilbur.hasOwnProperty('squeal')); 

// when the JS engine doesn't see 'squeal' on wilbur, it looks up the prototype chain

var pops = {
    popsFunction: function() {
        log('pops'); 
    }
}

var son = Object.create(pops); 
log('Son has pops property?', son.hasOwnProperty('popsFunction')); 
son.popsFunction(); 

// The Object.create() method takes an object which will become the prototype

function Truck() {

}
Truck.prototype.mud = function() {
    log('splash'); 
}
var tacoma = new Truck(); 
tacoma.mud(); 

//function used as a constructor, this refers to object that you're creating

function Account(transactions, id) {
    this.transactions = transactions;
    this.id = id; 
}

var savings = new Account([0, 100, 200, -100], 12345); 
log(savings.transactions, savings.id); 

Account.prototype.balance = function() {
    return this.transactions.reduce((a,b) => { 
        return a+b; 
    }); 
}

log(savings.balance()); 

function SavingsAccount(rate, transactions) {
    this.rate = rate; 
    this.transactions = transactions; 
}

SavingsAccount.prototype = Object.create(Account.prototype); 

let collegeSavings = new SavingsAccount(1.5); 

// log(collegeSavings.balance()); 
// 
//Concatenative Inheritance - Object Composition 

const distortion = { distortion: 1 };
const volume = { volume: 1 };
const cabinet = { cabinet: 'maple' };
const lowCut = { lowCut: 1 };
const inputLevel = { inputLevel: 1 };

const GuitarAmp = (options) => {
  return Object.assign({}, distortion, volume, cabinet, options);
};

let amplifierPeavey = GuitarAmp({ distortion: 10 });

log(amplifierPeavey.__proto__); 