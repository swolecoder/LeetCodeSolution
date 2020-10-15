/**
 * @param {number} n
 * @return {number}
 */

/*
    if (cache.has(n)) return cache.get(n);
    if (n === 0) return 0;

    const biggestRoot = Math.floor(Math.sqrt(n));
    let best = Infinity;
    for(let i=1; i<=biggestRoot; i++) {
        const m = i*i;
        best = Math.min(best, 1 + numSquares(n-m));
    }
    cache.set(n, best);
    return best;


*/
var numSquares = function (n) {
    let memo = new Map();

    function helper(n) {
        let min = Infinity;

        if (memo.has(n)) return memo.get(n)

        if (n == 0) return 0;

        for (let i = 1; i * i <= n; i++) {
            min = Math.min(min, numSquares(n - i * i))
        }
        memo.set(n, min + 1)
        return min + 1
    }

    return helper(n)
};
