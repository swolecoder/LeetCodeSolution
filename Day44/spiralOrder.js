/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let row = 0;
    let column = 0;

    if (!matrix.length) return []

    let rowEnd = matrix.length - 1;
    let columnEnd = matrix[0].length - 1;

    let result = [];

    while (row <= rowEnd && column <= columnEnd) {
        //do stuff
        for (let i = column; i <= columnEnd; i++) {
            result.push(matrix[row][i])
        }
        row++;

        //last row
        for (let i = row; i <= rowEnd; i++) {
            result.push(matrix[i][columnEnd])
        }


        columnEnd--;


        //now while
        if (row <= rowEnd) {
            for (let i = columnEnd; i >= column; i--) {
                result.push(matrix[rowEnd][i])
            }
            rowEnd--;
        }



        if (column <= columnEnd) {
            for (let i = rowEnd; i >= row; i--) {
                result.push(matrix[i][column])
            }

            column++;
        }
    }


    return result;
};