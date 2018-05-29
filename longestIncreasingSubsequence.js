var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;
  let lengths = [1];
  let maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    maxLength = 1;
    for (let j = 0; j < lengths.length; j++) {
      if (nums[j] < nums[i]) {
        maxLength = Math.max(maxLength, lengths[j] + 1);
      }
    }
    lengths.push(maxLength);
  }
  for (let i = 1; i < lengths.length; i++) {
    maxLength = Math.max(maxLength, lengths[i]);
  }
  console.log(maxLength);
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
