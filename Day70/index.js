/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {

    let r = grid.length;
    let c = grid[0].length;

    let map = {};

    function helper(row, col1, col2) {
        //out of bound
        if (row >= r || col1 < 0 || col1 >= c || col2 < 0 || col2 >= c) {
            return 0
        }
        let cherry = grid[row][col1] + (col1 == col2 ? 0 : grid[row][col2]);

        let key = `${row}-${col1}-${col2}`;

        if ((key in map)) return map[key]

        let max = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                max = Math.max(max, helper(row + 1, col1 + i, col2 + j))
            }
        }

        return map[key] = max + cherry

    }

    return helper(0, 0, c - 1)
};