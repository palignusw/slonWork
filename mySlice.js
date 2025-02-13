function mySlice(arr, start, end) {
  let result = [];

  end = end === undefined ? arr.length : end;

  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(mySlice(arr, 2, 4));
