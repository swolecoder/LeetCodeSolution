/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let result = []
    helper(0,0,"")
    function helper(open, close, res){
        
        if(open == n && close == n){
           console.log(res)
            result.push(res)
            return
        
        }
        
        if(open < n)helper(open+1, close, res +"(")
        if(open > close && close < n)helper(open, close+1, res +")")
       
    }
    
    return result
};
