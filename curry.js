function greet(greeting) {
    return function(name){
        return greeting + name; 
    }
}

console.log(greet('hi')('nick'));

let greetName = greet('hey'); 
console.log(greetName('Cassie')); 