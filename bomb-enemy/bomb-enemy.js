/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
    if(!grid.length)return 0
    let r = grid.length;
    let c = grid[0].length;
    
    let res = 0;
    
    for(let i=0; i < r; i++){
        for(let j =0; j < c; j++){
            if(grid[i][j] == "0"){
                let a = bfs(i,j)
                console.log(a)
                res = Math.max(res, a)
            }
        }
    }
    
    return res
    
    function bfs(row, column){
        
        let dirs = [[-1,0],[1,0],[0,1],[0,-1]];
        let num = 0
        
        for(let [r1,c1] of dirs){
            
            let r = row;
            let c = column;
            
            while(grid[r] && grid[r][c] != undefined){
                
                if(grid[r][c] == "W")break;
                if(grid[r][c] == "E")num++
                
                r += r1;
                c += c1
            }  
            
        }
        
        return num
        
        
        
    }
};