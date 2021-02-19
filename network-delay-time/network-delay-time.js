/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    
    
    let dp = new Array(n+1).fill(Infinity);
    dp[k] = 0;
    
    
    for(let i=0; i < n-1; i++){
        
        for(let [a,b,c] of times){
            if(dp[a] + c < dp[b]){
                dp[b] = dp[a]+c
            }
        }
    }
    
    dp.shift();
    console.log(dp)
    
    let max = Math.max(...dp)
    
    return max == Infinity ? -1 : max;
};