export const ex7 = () => {
    document.getElementById('sub-title').innerText = "Intro - Inefficient loop";
    // compressBoxesTwice(everyone);
    logPairs(boxes);
};

// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logPairs(arr) {
    // For Each version ES5
    // arr.forEach(function(boxes) { // O(n)
    //     arr.forEach(function(boxes2) { // O(n)
    //         console.log('[' + boxes + ', ' + boxes2 + ']');
    //     });
    // });

    // For Loops
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr.length;j++) {
            console.log('[' + arr[i] + ', ' + arr[j] + ']')
        }
    }

    // arr.forEach(function(boxes) { // O(n)
    //     arr.forEach(function(boxes2) { // O(n)
    //         console.log('[' + boxes + ', ' + boxes2 + ']');
    //     });
    // });
}

// Big O?
// Nested loops => O(n*n) => O(n^2) => Quadratic Time
