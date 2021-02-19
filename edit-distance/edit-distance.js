/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
   
    let map = {};
    
    return helper(word1.length, word2.length)
    

    function helper(m,n){
        
        let key = m + " " + n;
        if(map[key] !== undefined)return map[key];

        if(m==0)return n;
        
        if(n==0)return m;
        
        
        if(word1[m-1] == word2[n-1]){
            return  helper(m-1,n-1)
        }else{
            
            let res =  1+ Math.min(helper(m-1,n), helper(m,n-1), helper(m-1,n-1));
            
            map[key] = res
        }
        
        return map[key]
    }
};