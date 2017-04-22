"use strict"

let log = console.log;
function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factoral(num - 1);
    }
}

//factorial 3 is just factorial(2) * 3
//factorial 2 is just factorial(1) * 2
//factorial (1) is just 1

function reverseString(str) {
    if (str.length === 1) {
        return str;
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

//reverse('dog'); 
//reverse('dog') is reverse('og') + 'd'
//reverse('og') is reverse('g') + 'o'
//reverse('g') is 'g'


function map(arr, func) {
    if (arr.length === 1) {
        return [func(arr[0])];
    } else {
        return map(arr[0], func).concat(map(arr.slice(1), func));
    }
}

// map(['a','b','c'], ... ) is map(['b', 'c'], ...) + func('a'); 
// map(['b', 'c'], ... ) is map(['c'], ...) + func('b'); 
// map(['c'], ...) is just func('c') 

log(map(['a', 'b', 'c'], function (value) {
    return value.toUpperCase();
}));


// write the merge sort algorithm, recursively 

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    let half = Math.ceil(arr.length / 2);
    let left = arr.slice(0, half);
    let right = arr.slice(half, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
    let mergedInOrder = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            mergedInOrder.push(leftArr.shift());
        } else {
            mergedInOrder.push(rightArr.shift());
        }
    }
    while (leftArr.length) {
        mergedInOrder.push(leftArr.shift());
    }
    while (rightArr.length) {
        mergedInOrder.push(rightArr.shift());
    }
return mergedInOrder; 
}


log(mergeSort([5, 4, 3, 2, 1]));

// 5,4,3,2,1
// 5,4,3,2,1 is 5,4,3 and 2,1 mergesorted
// 5,4,3 and 2,1 is 5,4    3    2   1    mergesorted
// 5,4 is 5 4 3 2 1 mergeSorted, which is 5 4 3 2 1
// 

