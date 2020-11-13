/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {

    let trusting = new Array(N + 1).fill(0);
    let trusted = new Array(N + 1).fill(0);

    for (let [a, b] of trust) {
        trusted[b]++;
        trusting[a]++;
    }



    for (let i = 1; i <= N; i++) {
        if (trusted[i] == N - 1 && trusting[i] == 0) {
            return i
        }
    }

    return -1;
};