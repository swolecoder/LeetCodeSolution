/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 0;
    let j = nums.length - 1;

    let index = 0;

    while (index <= j) {
        if (nums[index] == 0) {
            //swap with i
            [nums[index], nums[i]] = [nums[i], nums[index]];
            i++;
            index++;
        } else if (nums[index] == 2) {
            //swap with j
            [nums[index], nums[j]] = [nums[j], nums[index]];
            j--;
        } else {
            index++;
        }
    }

    return nums;
};