
const nemo = ['nemo'];
const everyone  = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(100000).fill('nemo');

export const ex2 = () => {
    document.getElementById('sub-title').innerText = "Intro - Inefficient loop";
    findNemo(large);
};

function findNemo(array) {
    let t0 = performance.now(); // start timer

    for (let i=0;i<array.length;i++) {
        console.log('Found NEMO!');
    }

    let t1 = performance.now();

    console.log('Call to find Nemo took: ' + (t1-t0) + ' ms');
}
