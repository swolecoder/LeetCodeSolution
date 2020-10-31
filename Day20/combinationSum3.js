/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {

    let ans = [];

    function backTrack(num, stack, target) {

        if (stack.length == k) {
            if (target == 0) {
                ans.push(stack);
                return;
            }
        }

        for (let i = num + 1; i < 10; i++) {
            if (i <= target) {
                backTrack(i, [...stack, i], target - i)
            } else {
                return
            }
        }
    }

    backTrack(0, [], n);
    return ans
};