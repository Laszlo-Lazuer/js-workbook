export const ex8 = () => {
    document.getElementById('sub-title').innerText = "Intro - Inefficient loop";
    printAllNumbersThenAllPairSums(nums);
};

const nums = [1,2,3,4,5];
function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are the numbers:');
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

// Big O(1 + n + 1 + (n * n + 1)) => O(n + n^2) => O(n^2) -> Drop the non-dominant terms

// EX: O(x^2+3x+1000+x/2) => O(x^2)

// Rules:
// 1. Worst Case scenario
// 2. Remove Constants
// 3. Different terms for inputs
// 4. Drop Non Dominants
