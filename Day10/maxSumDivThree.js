/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(A) {


    let N = A.length;
    let cur = Array(3).fill(0);
    for (let i = 1; i <= N; ++i) {
        let pre = [...cur];
        for (let j of [0, 1, 2]) {
            let sum = A[i - 1] + pre[j];
            cur[sum % 3] = Math.max(cur[sum % 3], sum);
    }
    return cur[0]; /
};