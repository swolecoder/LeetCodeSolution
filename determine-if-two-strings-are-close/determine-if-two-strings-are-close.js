/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    
    if(word1.length != word2.length)return false
    
    
    function helper(word){
        let map = {};
        for(let w of word){
            map[w] = (map[w] || 0)+1
        }
        
        return map;
    }
    
    
    let map1 = helper(word1);
    let map2 = helper(word2)
    
    
    let keysWord1Set = new Set(Object.keys(map1))
​
    
    /* check if keys are same*/
    
    for(let [key,val] of Object.entries(map2)){
        if(!keysWord1Set.has(key))return false
    }
    
    /*.        */
    
    let val1 = Object.values(map1).sort((a,b)=> a -b)
    
    let val2 = Object.values(map2).sort((a,b)=> a -b)
    
    for(let i=0; i < val1.length; i++){
        if(val1[i] != val2[i])return false
    }
