/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    
    let r = grid.length;
    let c = grid[0].length;
    
    function isMagic(a,b,c,d,e,f,g,h,i){
        console.log(a,b,c,d,e,f,g,h,i)
        
        let set = new Set([a,b,c,d,f,e,f,g,h,i]);
       
        
        let checker = Array.from(set).every((d)=> d > 0 && d < 10)
         console.log(Array.from(set),checker)
        if(!checker)return false
        if(set.size != 9) return false
        
        let sum1= a+b+c;
        let sum2= a+d+g
        let sum3= g+h+i
        let sum4= g+h+i
        let sum5= a +e+i
        let sum6= c+e+g
       
       let as = sum1 == 15 &&  (sum1 === sum2) && (sum1 ===sum3) && (sum1 === sum4) && sum1 === sum5  && sum5=== sum6
        console.log(sum1, sum2, sum3, sum4, sum5, sum6, as)
        
        return as
    }
    
    let count = 0;
    
    for(let i=0; i < r-2; i++){
        for(let j =0; j < c-2; j++){
            
            if(grid[i] != undefined && grid[i+1]!= undefined  && grid[i+2] != undefined && grid[i][j] != undefined && grid[i][j] != undefined && grid[i][j+1] != undefined && grid[i][j+2] != undefined 
              
              && grid[i+1][j]!= undefined && grid[i+1][j+1] != undefined && grid[i+1][j+2] != undefined &&
               
               grid[i+2][j]!= undefined && grid[i+2][j+1] != undefined && grid[i+2][j+2]!= undefined 
              ){
                  if(isMagic(grid[i][j], grid[i][j+1], grid[i][j+2] ,
                   grid[i+1][j], grid[i+1][j+1], grid[i+1][j+2],
                    grid[i+2][j], grid[i+2][j+1], grid[i+2][j+2]
                   )){
                     
                       console.log("Ashish")
                      count++
                  }
                 console.log("Ashish")
                
              }
            
            
        }
    }
    
    return count;
};