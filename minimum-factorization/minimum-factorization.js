/**
 * @param {number} a
 * @return {number}
 */

let MAX_INT = 2147483647

var smallestFactorization = function(a) {
    let result =[]
    helper(9,[],0)
    console.log("xnkwndkwecdewcdwe",result)
    
    if( a <= 2)return a;
    
    if(!result.length)return 0
    
    // if(result.join("").length > a.toString().length){
    //     console.log("Ashish")
    //     return 0
    // }
    
    if(result.join("") > MAX_INT) return 0
    
    return  result.join("");
    
    
    
    function helper(start, res, running){
        if(running > a)return;
        
        if(running == a){
           // console.log(res)
            if(!result.length){
               result = res.reverse().slice()
            }
            return 
        }
        
        
        for(let i=start; i >=2; i--){
           res.push(i);
            let current = res.reduce((a,b)=> a *b)
            helper(i, res,current);
            res.pop()
        }
        
        
        
    }
};