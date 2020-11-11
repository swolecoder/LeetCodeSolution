/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = {};
    let firstSeen = {}; //index of first seen element
    let minLen = 0;
    let degree = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in firstSeen)) firstSeen[nums[i]] = i;
        map[nums[i]] = (map[nums[i]] || 0) + 1;

        if (map[nums[i]] > degree) {
            degree = map[nums[i]];
            minLen = i - firstSeen[nums[i]] + 1;
        } else if (map[nums[i]] == degree) {
            minLen = Math.min(minLen, i - firstSeen[nums[i]] + 1);
        }
    }

    return minLen;
};