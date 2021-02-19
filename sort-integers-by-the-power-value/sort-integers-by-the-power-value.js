/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    
    
    function findN(n, steps){
        
        if(n < 0)return n
        
        if(n==1){
            return steps
        }
        let i = n % 2 ==0 ? n /2 : (3 * n) +1;
        
        return findN(i, steps+1)
    }
    
    let res = [];
    
    for(let i = lo; i <=hi; i++ ){
        let a = findN(i,0)
        console.log(a)
        
        res.push({"d":i,"res":a })
  
    }
    
   res.sort((a,b)=> a.res-b.res)
                 
    console.log(res)      
    
    return res[k-1]['d']
                 
};
