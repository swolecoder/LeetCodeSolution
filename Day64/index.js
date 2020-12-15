/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    let l = 0;
    let r = nums.length - 1;

    let result = [];

    while (l <= r) {
        let num1 = Math.pow(nums[l], 2);
        let num2 = Math.pow(nums[r], 2);

        if (num1 > num2) {
            result.push(num1);
            l++
        } else {
            result.push(num2);
            r--;
        }
    }

    return result.reverse()
};