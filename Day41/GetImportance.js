/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {

    let importanceLookUp = new Array(2001).fill(0);

    let graph = {};

    for (let i = 0; i < employees.length; i++) {
        let idVal = employees[i].id;
        let importanceVal = employees[i].importance;
        let child = employees[i].subordinates;
        importanceLookUp[idVal] = importanceVal;
        if (!(idVal in graph)) graph[idVal] = [];
        if (child.length > 0) graph[idVal].push(...child)
    }

    let q = [id];
    let res = 0;
    let seen = new Set();

    while (q.length) {
        let d = q.pop();
        if (seen.has(d)) continue;
        res += importanceLookUp[d];
        if (graph[d]) {

            for (let child of graph[d]) {
                seen.add(d)
                q.push(child)
            }
        }

    }


    return res;

};