export const ex11 = () => {
    document.getElementById('sub-title').innerText = "Twitter example.";
    summary();
    arrFind(arr)
};

const arr = [1, 2, 3, 4, 5];

function summary() {
    console.log('Twitter example');
}

// Retrieve 1st, Find Nth...

const array = ['hi', 'my', 'teddy'];  //Assume tweets are stored in an array


function arrFind(arr) {
    // array[0]; //O(1)
    // array[array.length - 1]; // O(1)
    console.log('Newest: ' + arr[arr.length - 1]);
    console.log('Oldest: ' + arr[0]);
}


// What if we're dealing with an object
const object = [
    {
        tweet: 'hi',
        date: 2012
    },
    {
        tweet: 'my',
        date: 2014
    },
    {
        tweet: 'teddy',
        date: 2014
    },
];

// Here we will be comparing each date key against the whole array of objects
// Which will require a nested loop thus:
// BIG O(n^2)

// What is the operation if we have a string:
let string = 'soiejrporslkadjfalsdfj'.length; // What is the BIG O of this?

// Answer:
// Depends on the language that you are working with, it will depend on how the method
// is built.

// In JS .length is built into each string, therefore it is a simple lookup
// no function is run.  It is a property of an object.

// Thus BIG O(1) constant time.
