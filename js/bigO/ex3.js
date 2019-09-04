
const nemo = ['nemo'];
const everyone  = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(100000).fill('nemo');

export const ex3 = () => {
    document.getElementById('sub-title').innerText = "O(n) - Cleanup";
    findNemo(large);
};

function findNemo(array) {
    for (let i=0;i<array.length;i++) {
        console.log('Found NEMO!');
    }
}
