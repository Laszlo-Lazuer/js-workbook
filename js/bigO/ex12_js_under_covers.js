export const ex12 = () => {
    document.getElementById('sub-title').innerText = "Twitter example.";
    summary();
    findNemo(everyone);
    findNemo2(everyone);
    findNemo3(everyone);
};

const summary = () => {
    console.log('JS - Loops Deep Dive');
};

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel',
    'squirt', 'darla', 'hank', 'n'];

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

const findNemo2 = (array) => {
    array.forEach(fish => {
            if (fish === 'nemo') {
                console.log('Found NEMO!');
            }
        }
    )
};

const findNemo3 = (array) => {
    for (let fish of array ) {
        if (fish === 'nemo') {
            console.log('Found NEMO!');
        }
    }
};
