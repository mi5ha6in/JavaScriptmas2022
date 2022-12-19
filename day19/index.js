function centuryFromYear(num) {
  //  write code here.
  return Math.floor((num - 1) / 100) + 1;
}

console.log(centuryFromYear(1905), "expect: 20");
console.log(centuryFromYear(1700), "expect: 17");
