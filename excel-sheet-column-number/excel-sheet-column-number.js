/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let res = 0;
    let index = 0;
    
    for(let i = s.length-1; i >=0; i--){
        
        res += (Math.pow(26,index++) *(s[i].charCodeAt(0) - 65+1) )
        
    }
    
    return res
};