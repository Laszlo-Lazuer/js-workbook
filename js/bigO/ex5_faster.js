const nemo = ['nemo'];
const everyone  = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(100000).fill('nemo');

export const ex5 = () => {
    document.getElementById('sub-title').innerText = "Intro - Inefficient loop";
    printFirstItemThenFirstHalfThenSayHi100Times(everyone);
};

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length /2);
    var index =0;

    while (index < middleIndex) {
        console.log(items[index]);
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

// O(1 + n/2 + 100) => Drop the constants -> O(n + 1) -> O(n)


function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) { // O(n)
        console.log(boxes);
    });

    boxes.forEach(function(boxes) { // O(n)
        console.log(boxes);
    });
}

// BIG O(n+n) => O(2n) -> Drop constants = O(n)
