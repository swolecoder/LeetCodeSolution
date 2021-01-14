/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (n, x) {

    let map = {};

    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum += n[i];

        map[sum] = i + 1
    }

    sum = 0;

    let res = Infinity;
    if (map[x] != undefined) res = map[x]


    for (let i = n.length - 1; i >= 0; i--) {

        sum += n[i];
        // sum + y === x
        let y = x - sum;

        if (y == 0) {
            res = Math.min(res, n.length - i)
        } else {

            if (map[y] !== undefined && map[y] < i) {
                res = Math.min(res, map[y] + n.length - i)
            }
        }

    }
    return res == Infinity ? -1 : res;
};