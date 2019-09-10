export const prac1 = () => {
    document.getElementById('sub-title').innerText = TITLE;
    summary();

    // console.log('my version');
    // hasValue(array1, array2);
    // hasValue(array1, array3);

    // console.log('inefficient');
    // console.log(containsCommonItem(array1,array2));
    // console.log(containsCommonItem(array1,array3));

    console.log('optimized');
    console.log('Should be false, array1 & array2: ' + containsCommonItem2(array1, array2));
    console.log('Should be true, array1 & array3: ' + containsCommonItem2(array1, array3));

    console.log('Readable');
    console.log('Should be false, array1 & array2: ' + containsCommonItems3(array1, array2));
    console.log('Should be true, array1 & array3: ' + containsCommonItems3(array1, array3));

};

const TITLE = 'Interview Practice - Practice Example 1';

const summary = () => {
    console.log(TITLE);
};

// Given 2 arrays, create a function that let's a user know (true/false)
// whether these two arrays contain any common items.
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//----------------------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['z', 'y', 'x'];

const hasValue = (arr, arr2) => {
    let found = false; // O(1)

    for (let letter of arr ) { // O(a)
        if (arr2.indexOf(letter) !== -1) { // O(1)
            console.log('Found matching letter: ' + letter); //O(1)
            found = true; //O(1)
            break //O(1)
        }
    }
    return console.log(found)
};


// Proper Approach
// Detail question:
// Given 2 arrays, create a function that let's a user know (true/false)
// whether these two arrays contain any common items.
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//----------------------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 Parameters - Always arrays confirmed with interviewer - no size limit
// returns true/false

// Ask how big the array may get?  This will determine if BigO() time complexity/space complexity are relevant.
// Ask if time complexity or space complexity is more important.

// If they say most efficient

// Try the brute force approach, could be spoken.
// This would be nested for loop in this scenario BIG O(n^2), Easy naive solution.

// Explain why this may not be the best approach,
// Complicated or hard to read

function containsCommonItem(arr1, arr2) {
    for (let i=0;i<arr1.length;i++) {
        for (let j=0;j<arr2.length;j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}
// Big O(a*b)
// Space Complexity - O(1)

// How to improve it? - Hash table

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    let map = {};

    for (let i = 0;i<arr1.length;i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // console.log(map)

    // loop through second array and check if item in second array exists on created object.
    for (let j=0;j<arr2.length;j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

// O(a+b) & Improved time complexity
// Space Complexity - O(a)

// Next Steps

// Optimize for Readability
function containsCommonItems3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}
