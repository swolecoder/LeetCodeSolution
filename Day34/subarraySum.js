/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    let map = {
        "0": 1
    }

    let sum = 0;
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if ((sum - k) in map) {
            total += map[sum - k];
        }

        map[sum] = (map[sum] || 0) + 1;

    }

    return total;
};