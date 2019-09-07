export const ex10 = () => {
    document.getElementById('sub-title').innerText = "Space Complexity.";
    summary();
    booooo([1,2,3,4,5]);
    console.log(arrayOfHiNTimes(6));
};

const arr = [1,2,3,4,5];

function summary() {
    console.log('Space Complexity (Memory)');
}

function booooo(n) {
    for (let i=0;i<n.length;i++) {
        console.log('booooo!');
    }
}

// Big(o) -> O(n)

// Space Complexity: Only creating the i variable => O(1)


function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i=0;i<n;i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

// Big(o) -> O(n)

// Space Complexity: Only creating the i variable => O(n) it grows based on num of items
