let moveZeroes = function (nums) {
  //  O(n) time complexity
  let writeIdx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      [nums[writeIdx], nums[i]] = [nums[i], nums[++writeIdx]];
    }
  }
};
