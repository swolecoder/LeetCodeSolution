/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = {};
    
    for(let i =0; i < words.length; i++){
        let w = words[i];
        map[w] = (map[w] || 0)+1
    }
    
    let result = [];
    let keys = Object.keys(map).sort((a,b)=> {
        if(map[b] == map[a]){
          return  a.localeCompare(b)
        }
        return  map[b] - map[a];
    });
    
    let index = 0;
    
    while(index < k){
        result.push(keys[index++])
    }
    
    return result
};
