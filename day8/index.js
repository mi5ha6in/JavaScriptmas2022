function validTime(str) {
  const [hours, mins] = str.split(":").map((item) => parseInt(item, 10));
  return hours >= 0 && hours < 24 && mins >= 0 && mins < 60;
}

console.log(validTime("13:58"), "expect: true");
console.log(validTime("25:58"), "expect: false");
console.log(validTime("13:75"), "expect: false");
