/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    let N = nums.length;
    if (N == 0) return 0;

    let opt = new Array(N).fill(0).map(() => new Array(N).fill(0));

    for (let len = 0; len < N; len++) {

        for (let i = 0; i + len < N; i++) {
            let j = i + len;

            for (let k = i; k <= j; k++) {

                let left_num = i === 0 ? 1 : nums[i - 1];
                let right_num = j === N - 1 ? 1 : nums[j + 1];

                let left_opt = k == i ? 0 : opt[i][k - 1];
                let right_opt = k == j ? 0 : opt[k + 1][j]

                opt[i][j] = Math.max(
                    opt[i][j],
                    left_num * nums[k] * right_num + left_opt + right_opt

                )

            }
        }
    }
    return opt[0][N - 1]
};