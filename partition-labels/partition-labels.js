/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
   let map = {};
    
   for(let i =0; i < S.length; i++){
       if(map[S[i]] == undefined)map[S[i]] =0;
       map[S[i]] = i;
   }
    console.log(map)
    
    let max = -1
    let pev = 0;
    
    let result = []
    
    for(let i=0; i < S.length; i++){
    
       max =  Math.max(max, map[S[i]])
        
        if(i==max){
            //console.log("Ashish", S.slice(pev,i+1))
            result.push(S.slice(pev,i+1).length)
            pev = i+1
        }
        
        
        
        
    }
    
    return result
};
