/*
Given a nested list of integers, return the sum of all integers in the list weighted by their depth. Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example
Given the list [[1,1],2,[1,1]], return 10. (four 1's at depth 2, one 2 at depth 1, 4 1 2 + 1 2 1 = 10) Given the list [1,[4,[6]]], return 27. (one 1 at depth 1, one 4 at depth 2, and one 6 at depth 3; 1 + 42 + 63 = 27)
*/

const nestedListWeightSum = (array, depth = 1) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += nestedListWeightSum(array[i], depth+1);
    } else {
      sum += array[i] * depth;
    }
  }
  return sum;
}

// Test

let desc = '[[1, 1], 2, [1, 1]] === 10';
let actual = nestedListWeightSum([[1, 1], 2, [1, 1]]);
let expected = 10;
assertEqual(actual, expected, desc);

desc = '[1, [4, [6]]] === 27';
actual = nestedListWeightSum([1, [4, [6]]]);
expected = 27;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a == b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} !== ${b}`);
  }
}
