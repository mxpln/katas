// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.reduce((r, a) => (a > 0 ? r + a : r), 0);
}

console.log(positiveSum([1, -2, 3, 4, 5])); // returns 13
console.log(positiveSum([])); // returns 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // returns 0
