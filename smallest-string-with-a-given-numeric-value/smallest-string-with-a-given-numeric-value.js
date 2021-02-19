/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    
    let lookUp = " abcdefghijklmnopqrstuvwxyz";
    
    let res = "";
    
    for(let i= n -1; i >=0; i--){
        let min = Math.min(26, k-i);
        res = lookUp[min] + res;
        k = k - min
    }
    
    return res;
};