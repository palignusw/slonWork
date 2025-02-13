function myIncludes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(myIncludes(arr,11));
