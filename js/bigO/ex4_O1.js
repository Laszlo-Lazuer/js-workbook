const boxes = [0,1,2,3,4,5];

export const ex4 = () => {
    document.getElementById('sub-title').innerText = "O(1) Constant Time - Same constant ammount of time, irrelevant of inputs, flat";
    // compressFirstBox(large);
    logFirstTwoBoxes(boxes); // O(2) - 2 operations every time.
};


function compressFirstBox(boxes) {
    console.log(boxes[0]);
}

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}


// Quiz 1
// https://repl.it/@aneagoie/BigO-Exercise-1
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10;
    a = 50 + 3;

    for (let i = 0; i < input.length; i++) {
        anotherFunction();
        let stranger = true;
        a++;
    }
    return a;
}

// Solution
function funChallenge2(input) { // O(n)
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); // O(n) -> called depending on input size
        let stranger = true; // O(n) -> called depending on input size
        a++; // O(n) -> called depending on input size
    }
    return a; // O(1)
}

// 3 + n + n + n + n -> 3 + 4n
// BIG O(3+4n)

// Quiz 2
// https://repl.it/@aneagoie/BigO-Exercise-2
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)

    for (let i = 0; i < input; i++) { // O(n)
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)

    }

    for (let j = 0; j < input; j++) { // O(n)
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }

    let whoAmI = "I don't know"; // O(1)
}

// Solution
// 4 + n + n + n + n + n + n + n
// 4 + 7n -> BIG O(4+7n)
