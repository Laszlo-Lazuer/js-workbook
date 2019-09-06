const nemo = ['nemo'];
const everyone  = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(100000).fill('nemo');

export const ex6 = () => {
    document.getElementById('sub-title').innerText = "Intro - Inefficient loop";
    compressBoxesTwice(everyone);
};

function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) { // O(n)
        console.log(boxes);
    });

    boxes.forEach(function(boxes) { // O(n)
        console.log(boxes);
    });
}

// BIG O(n+n) => O(2n) -> Drop constants = O(n)

function compressBoxesTwiceDiff(boxes, boxes2) {
    boxes.forEach(function(boxes) { // O(n)
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) { // O(n)
        console.log(boxes);
    });
}

// BIG O(a+b) => O(a+b) -> Drop constants = O(a+b)
// Since the inputs are distinct, we treat them as separate terms.
