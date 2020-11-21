function prletMatrixDiagonally(matrix){
    let M = matrix.length;
    let N = matrix[0].length;

    // prlet "/" diagonal for upper-left half of the matrix
    for (let r = 0; r < M; r++)
    {
        // start from each cell of first column of the matrix
        for (let i = r,j = 0; i>=0 &&  j < N ;i--,  j++) {
            console.log(matrix[i][j] + " ");

        }

        console.log("-----")
    }

    for (let c = 1; c < N; c++)
    {
        // start from each cell of first column of the matrix
        for (let i = M-1,j = c; i>=0 &&  j < N ;i--,  j++) {
            console.log(matrix[i][j] + " ");

        }

        console.log("-----")
    }

}


let a =[
    [ 1, 2, 3, 4, 5 ],
    [ 2, 3, 4, 5, 6 ],
    [ 3, 4, 5, 6, 7 ],
    [ 4, 5, 6, 7, 8 ],
    [ 5, 6, 7, 8, 9 ]
];

console.log(prletMatrixDiagonally(a))