/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {



    let dp = new Array(s.length + 1).fill(0);

    dp[0] = 1; //empty steriung

    dp[1] = s.charAt(0) == 0 ? 0 : 1;

    for (let i = 2; i <= s.length; i++) {
        let oneDigit = +s.slice(i - 1, i);
        let twoDigit = +s.slice(i - 2, i);
        if (oneDigit >= 1) {
            dp[i] += dp[i - 1]
        }
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2]
        }
    }

    return dp[s.length]
};