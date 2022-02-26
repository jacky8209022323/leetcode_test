/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let result = nums[0];
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
      current = current + nums[i];
      if (nums[i] > current) {
          current = nums[i];
      }
      if (result < current) {
          result = current;
      }
  }
  return result;
};
