/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var areConnected = function (n, threshold, queries) {

    let parent = [];
    for (let i = 0; i <= n; i++) {
        parent[i] = i;
    }

    //edge case
    if (threshold <= 0) {
        return new Array(queries.length).fill(true)
    }

    function find(a) {
        if (a == parent[a]) return a
        return a = find(parent[a])
    }

    function union(a, b) {
        let A = find(a);
        let B = find(b);
        if (A !== B) {
            parent[A] = B
        }
    }


    for (let i = threshold + 1; i <= n; i++) {
        for (let j = i * 2; j <= n; j += i) {
            if (i !== j) {
                union(i, j)
            }

        }
    }

    let result = [];

    for (let [x, y] of queries) {
        if (find(x) == find(y)) { result.push(true) } else {
            result.push(false)
        }
    }

    return result
};