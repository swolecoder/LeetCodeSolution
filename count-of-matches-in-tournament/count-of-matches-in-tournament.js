/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
   
   return dfs(n,7,[])
    function dfs(index, teams, sum){
​
        if(index < 0 )return 
         if(index==1){
            
            return sum.reduce((a,b)=> a+b,0); 
        }
        
         let i = index % 2 == 0 ? index /2 : (((index-1)/2 )+1)
        let m = index - i
       return dfs(i,teams+m, [...sum, m])
        
    }
};
