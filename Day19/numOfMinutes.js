/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {

    let graph = {};

    for (let i = 0; i < manager.length; i++) {
        if (i == headID) continue;
        if (!(manager[i] in graph)) {
            graph[manager[i]] = [];

        }
        graph[manager[i]].push(i)

    }


    let q = [[headID, informTime[headID]]];
    let seen = new Set();
    let res = 0;

    while (q.length) {

        let data = q.shift();
        let emp = data[0];
        let time = data[1];
        if (!seen.has(emp)) {
            if (graph[emp]) {

                for (let e of graph[emp]) {
                    seen.add(emp)
                    res = Math.max(res, time + informTime[e]);
                    q.push([e, informTime[e] + time])
                }
            }
        }
    }

    return res
};