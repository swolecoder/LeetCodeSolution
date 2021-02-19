/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    
    
    let queue = [[0,0,0]]
    
    let set = new Set()
    while(queue.length){
        
        let [a,b,c] = queue.shift();
        
        let key = a + " " + b;
        if(set.has(key))continue;
        
        set.add(key)
        
        if(a == s1.length && b == s2.length && c == s3.length)return true
        
        if( a < s1.length && s1[a] === s3[c])queue.push([a+1,b, c+1])
        
         if( b < s2.length && s2[b] === s3[c])queue.push([a,b+1, c+1])
    }
    
    return false
};