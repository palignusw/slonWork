function firstLetterToUppercase(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}

console.log(firstLetterToUppercase("hey"));
console.log(firstLetterToUppercase("hah"));

function cutLongText(str, maxLength) {
  if (str.length <= maxLength) return str;

  let trimmedStr = str.slice(0, maxLength).trim();
  let lastSpace = trimmedStr.lastIndexOf(" ");

  return (lastSpace > 0 ? trimmedStr.slice(0, lastSpace) : trimmedStr) + "...";
}

console.log(cutLongText("Это тестовая строка, которую мы будем обрезать.", 40));
console.log(cutLongText("Это та которую", 12));
console.log(cutLongText("это короткий текст", 500));



function isSubstring(str1, str2) {
  return str1.includes(str2) || str2.includes(str1);
}

console.log(isSubstring("hey", "ey"));
console.log(isSubstring("ts", "jsts"));
console.log(isSubstring("react", "fact"));
