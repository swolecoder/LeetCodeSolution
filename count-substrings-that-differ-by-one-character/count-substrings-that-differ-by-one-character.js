/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    
    let ans = 0;
    
    for(let i=0; i < s.length; i++){
        for(let j=0; j < t.length; j++){
            
            let x = i;
            let  y = j;
            let d = 0
            while(x < s.length && y < t.length){
                    if(s[x] != t[y])d++;
                if(d ==1)ans++;
                if(d ==2)break
              x++;
              y++
            
            }
               
            
        }
    }
    
    return ans
};
