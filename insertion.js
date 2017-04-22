"use strict" 

// first element is sorted (invariant condition)
// outer loop steps through the array
// inner loop moves current element backwards until it is in front of something larger than it (sorted)
// inserts in place 

const insertionSort = (arr) => {
    for (let i=1; i<= arr.length; i++) {
        let j = i; 
        while(j > 0 && arr[j-1] > arr[j]) {
            let temp = arr[j-1]; 
            arr[j-1] = arr[j]; 
            arr[j] = temp;
            j--; 
        }
    }
    return arr; 
}

console.log(insertionSort([5,4,3,3,5,2,1,10,2,1])); 