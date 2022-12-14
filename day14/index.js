function countVowelConsonant(str) {
  // write code here
  const vowels = ["a", "e", "i", "o", "u"];
  const answer = str.split("").reduce((acc, item) => {
    if (vowels.includes(item)) {
      return ++acc;
    }

    return acc + 2;
  }, 0);
  return answer;
}

console.log(countVowelConsonant("abcde"), "expect: 8");
