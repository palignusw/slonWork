const obj = { name: "Vasya", friends: 5, likes: 19, projects: 7 };

function sumOfObjectValues(obj) {
  let sum = 0;
  for (key in obj) {
    if (typeof obj[key] === "number") sum += obj[key];
  }
  return sum;
}

function sumOfObjectValuesAndSort(obj) {
  const arr = [];
  for (key in obj) {
    if (typeof obj[key] === "number") arr.push(key);
  }
  return arr.sort((a,b) => obj[b] - obj[a]);
}

console.log(sumOfObjectValues(obj));
console.log(sumOfObjectValuesAndSort(obj));
