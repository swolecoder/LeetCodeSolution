  }
  
  let set = new Set();
    
    
  while(q.length > 0){
      
      let [x,y,steps] = q.shift();
      
      for(let i=0; i < 4; i++){
          
          let x1 = x + dirs[i][0];
          let y1 = y + dirs[i][1];
          
          if(grid[x1] && grid[x1][y1]=='#' )return steps +1
          
          if(grid[x1] && grid[x1][y1] == 'O' && !set.has(`${x1}-${y1}`)){
              
              set.add(`${x1}-${y1}`)
              q.push([x1,y1,steps+1])
          }
          
          
      }
      
      
      
      
      
  }
    
return -1
    
};
