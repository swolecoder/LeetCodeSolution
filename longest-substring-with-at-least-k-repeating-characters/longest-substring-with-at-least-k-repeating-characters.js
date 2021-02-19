/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    
    return helper(0,s.length)
    
   function helper(start, end){
       let map = {};
    
    for(let i =start; i < end; i++){
        map[s[i]] = (map[s[i]] || 0)+1;
     }
    
    for(let i =start; i < end; i++){
        if(map[s[i]] < k){
            let left =  helper(start, i);
            let right = helper(i+1,end);  
 
            return Math.max(left, right)
            
        }

    }
  
    return end - start;
       
   }
};