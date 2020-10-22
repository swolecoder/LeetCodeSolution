/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {


    let N = nums.length;
    let cur = Array(3).fill(0);
    for (let i = 1; i <= N; ++i) {
        let pre = [...cur]; // create current from previous 🤔
        for (let j of [0, 1, 2]) {
            let sum = nums[i - 1] + pre[j]; // add A[i] onto each previous bucket (A[i - 1] for A[i] because buckets is offset by 1)
            cur[sum % 3] = Math.max(cur[sum % 3], sum); // update each (current sum % 3) bucket to max of itself and the current sum
        }
    }
    return cur[0]; // max sum of all N items of A which is evenly divisible by 3 🎯
};