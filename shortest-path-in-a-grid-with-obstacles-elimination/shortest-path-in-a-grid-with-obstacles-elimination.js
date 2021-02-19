/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
  let dirs = [
      
      [-1,0],
      [0,1],
      [1,0],
      [0,-1]
  ];
    
    let X = grid.length;
    let Y = grid[0].length;
    
  let q = [[0,0,0,0]]
  
  let set = new Set();
    
 while(q.length > 0){
     
     let [x,y,steps,obs] = q.shift();
     
     let key = x +"-"+ y+"-"+obs
     
     if(x== X-1 && y == Y-1){
         console.log("Ranjan", steps)
         return steps
    }
  
      if(x  < 0 || y < 0 || x == X || y == Y || obs >= k || set.has(key))continue;
     
     
     if(set.has(key))continue
     
      set.add(key)
     
      let o = grid[x][y] ==1 ? obs +1 : obs
     
     
     
     q.push([x+1, y, steps+1, o])
      q.push([x-1, y, steps+1, o])
      q.push([x, y+1, steps +1, o])
      q.push([x, y-1, steps+1, o])
      
     
 }   
 
    
   return -1 
    
};