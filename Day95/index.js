/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {


    let set = new Set()

    for (let i = 0; i < edges.length; i++) {
        let [a, b] = edges[i];

        set.add(b)
    }

    let res = [];

    for (let i = 0; i < n; i++) {
        if (!set.has(i)) res.push(i)
    }

    return res

};