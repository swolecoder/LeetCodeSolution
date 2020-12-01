function shortestDistance(matrix) {

    let dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    let activateCensors = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1]
    ]

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                for (let k = 0; k < activateCensors.length; k++) {
                    let i1 = i + activateCensors[k][0];
                    let j1 = j + activateCensors[k][1];

                    //boundary check
                    if (matrix[i1]) {
                        matrix[i1][j1] = "#"
                    }
                }
            }
        }
    }


    //change all # rto 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == "#") {
                matrix[i][j] = 0;
            }

        }

    }



    let queue = [];
    let visited = new Set();

    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[i][0] == 1) queue.push([i, 0, 0])
    }


    while (queue.length) {
        let [a, b, dis] = queue.shift();

        visited.add(`${a}${b}`);

        if (b == matrix[0].length - 1) return dis;


        for (let i = 0; i < dirs.length; i++) {
            let x1 = a + dirs[i][0];
            let y1 = b + dirs[i][1];

            if (matrix[x1] && matrix[x1][y1] == 1) {
                if (!visited.has(`${x1}${y1}`)) {
                    queue.push([x1, y1, dis + 1])
                }

            }
        }
    }


    return -1;

}

let field = [
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
console.log(shortestDistance(field))