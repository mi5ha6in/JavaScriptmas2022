function insertDashes(arr) {
  return arr
    .split(" ")
    .map((word) => word.split("").join("-"))
    .join(" ");
}

console.log(insertDashes("abcd efg"));
