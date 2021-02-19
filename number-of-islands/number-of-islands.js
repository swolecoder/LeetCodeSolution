/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    
    let count = 0;
    
    for(let i =0; i < r; i++){
        for(let j=0; j < c; j++){
            if(grid[i][j] == 1){
                dfs(i,j)
                count++
            }
        }
    }
    
    return count
    
    function dfs(i,j){
        if( i < 0 || i >=r || j <  0 || j >=c || grid[i][j] != "1")return;
        
        let temp = grid[i][j];
        grid[i][j] = "#"
        
         dfs(i+1, j)
         dfs(i-1, j)
         dfs(i, j+1)
         dfs(i, j-1)
        
        
    }
};
