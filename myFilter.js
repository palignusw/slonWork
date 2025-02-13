const myFilter = (array, callback) => {
    const result = []; 

    for (let i = 0; i < array.length; i++) {
        if (array[i] != null && callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNum = myFilter(arr, num => num % 2 === 0);
const numAreLarger = myFilter(arr, num => num > 3);

console.log(evenNum); 
console.log(numAreLarger); 