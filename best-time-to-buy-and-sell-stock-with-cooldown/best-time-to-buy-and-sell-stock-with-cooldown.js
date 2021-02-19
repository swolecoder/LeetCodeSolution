/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(A) {
    let b = -A[0], s = 0, r = 0;
    for (let a of A) {
        b = Math.max(b, r - a); // buy
        r = Math.max(r, s);     // rest
        s = Math.max(s, b + a); // sell
    }
    return s; 
};