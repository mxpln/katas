// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums) {
  if (Array.isArray(nums)) {
    return nums.sort((a, b) => a - b);
  } else {
    return [];
  }
}

console.log(solution(null));
console.log(solution([1, 2, 10, 50, 5]));
