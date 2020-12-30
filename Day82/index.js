/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {


    let dirs = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1]
    ];

    let r = board.length;
    let c = board[0].length

    let b = new Array(r).fill(0).map(() => new Array(c).fill(0));


    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {

            let count = 0;

            for (let k = 0; k < 8; k++) {
                let i1 = i + dirs[k][0];
                let j1 = j + dirs[k][1];

                //out of bound i1
                if (board[i1] && board[i1][j1] == 1) count++

            }


            //live or dead
            if (board[i][j] == 1) {
                if (count == 2 || count == 3) {
                    b[i][j] = 1
                }
            } else {
                if (count == 3) {
                    b[i][j] = 1
                }
            }
        }
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            board[i][j] = b[i][j]
        }
    }



};