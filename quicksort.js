'use strict'

const quicksort = (arr) => {
    if(arr.length < 2) return arr;
    let left = []; 
    let right = []; 
    let pivot = arr[0]; 
    for (let i=0; i< arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); 
        } else {
            right.push(arr[i]); 
        }
    }
    console.log(left, right); 
    return quicksort(left).concat(pivot, quicksort(right)); 
}

console.log(quicksort([5,4,3,2,1])); 

// sort 5 4 3 2 1 is sort 5 4 3 and sort 2 1