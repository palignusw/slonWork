function myIndexOf(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(myIndexOf(arr, 11));
