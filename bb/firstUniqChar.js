/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

let firstUniqChar = function (s) {
  /*
  //  O(n^2) time complexity
      for (let i=0; i<s.length; i++) {
          if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
      }
      return -1;
  */

  //  O(2n) time complexity with O(n) space complexity
  let charObj = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!charObj[char]) charObj[char] = 1;
    else charObj[char]++;
  }
  for (let j = 0; j < s.length; j++) {
    let char = s[j];
    if (charObj[char] === 1) return j;
  }
  return -1;
};
