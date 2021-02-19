/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const dp = [0 , 1, 1];
    
    if(n <= 2) {
        return dp[n];
    }
    
    for (let i = dp.length; i <= n; i++) {
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }
    
    return dp[dp.length - 1];
};