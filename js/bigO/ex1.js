
const nemo = ['nemo'];

export const ex1 = () => {
    findNemo(nemo);
};

function findNemo(array) {
    for (let i=0;i<array.length;i++) {
        console.log('Found NEMO!');
    }
}
