function Graph(arr, N) {
    let graph = {};
    for (let [i, j] of arr) {
        if (!(i in graph)) {
            graph[i] = [];
        }

        graph[i].push(j);
    }

    let arrival = new Array(N).fill(0);
    let departure = new Array(N).fill(0);
    let visited = new Array(N).fill(false);
    let time = -1;

    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            let returnedTime = dfs(i, time);
            time = returnedTime;
        }

    }

    return {
        "Arrival": arrival,
        "Departure": departure
    }


    function dfs(v, time) {
        time = time + 1;

        arrival[v] = time;
        visited[v] = true;//mark it as visited

        if (graph[v]) {
            for (let child of graph[v])
                if (!visited[child]) {
                    time = dfs(child, time)
                }
        }
        time = time + 1;
        departure[v] = time;
        return time;
    }

}

let arr = [[0, 1], [0, 2], [2, 3], [2, 4], [3, 1], [3, 5],
[4, 5], [6, 7]];
let N = 8;
console.log(Graph(arr, N))