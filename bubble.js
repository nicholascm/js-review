"use strict"
// loop through the outside each element
// loop through the entire inside (unsorted) for each loop of the outside
// continually bubble greater elements to the top
// when both loops complete, done. 


const bubble = (arr) => {
    for(let i = 0; i<=arr.length; i++) {
        let unsorted = arr.length; 
        for (let j=0; j<= unsorted; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1]; 
                arr[j+1] = arr[j]; 
                arr[j] = temp; 
            }
        }
        unsorted--; 
    }

    return arr; 
}

// [ 5 , 4 , 3 , 2 , 1 ]

console.log(bubble([5, 4, 3, 6, 7, 8, 3, 2, 1])); 