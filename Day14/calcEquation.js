/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

 //Note: Refactor later
var calcEquation = function (equations, values, queries) {

    let graph = {};

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];

        if (!(a in graph)) {
            graph[a] = []
        }

        if (!(b in graph)) {
            graph[b] = [];
        }

        graph[a].push({ node: b, weight: values[i] });
        graph[b].push({ node: a, weight: (1 / values[i]) })
    }


    let result = [];
    for (let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i];

        result.push(dfs(a, b))
    }

    return result;


    function dfs(a, b) {

        let q = [{ node: a, weight: Infinity }];
       let set = new Set();

        while (q.length) {
            let data = q.shift();
            if (!set.has(data.node)) {
                set.add(data.node);
                if (graph[data.node]) {
                    for (let d of graph[data.node]) {
                        let weight = data.weight == Infinity ? d.weight : d.weight * data.weight;

                        if (d.node === b) {
                            return weight
                        }

                        w *= d.weight;
                        q.push({ node: d.node, weight: weight })
                    }
                }

            }

        }

        return -1;
    }

};