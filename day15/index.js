/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

// Test your function
console.log(isPalindrome("abba"), "expect: true");
console.log(isPalindrome("civic"), "expect: true");
console.log(isPalindrome("octopus"), "expect: false");
console.log(isPalindrome("pumpkins"), "expect: false");
console.log(isPalindrome("madam"), "expect: true");
