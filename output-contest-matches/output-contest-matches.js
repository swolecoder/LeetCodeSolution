/**
 * @param {number} n
 * @return {string}
 */
var findContestMatch = function(n) {
    let res = new Array(n).fill(0);
    for(let i =0; i < n ;i++){
        res[i] = i+1;
    }
    
    
    while(n > 1){
        
        for(let i=0; i < n/2; i++){
            res[i] = "("+ res[i] +"," + res[n-i-1] +")"
        }
        
        n = Math.floor(n/2)
        
        
    }
    
    return res[0]
    
};