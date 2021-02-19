/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    
    let map = {};
    
    for(let i=0; i < wordDict.length; i++){
        let d = wordDict[i];
        map[d]= (map[d] || 0)+1
    }
    
    
    let queue = [0];
    let set = new Set()
    
    
    while(queue.length){
        
        let data = queue.shift();
        
        if(set.has(data))continue;
        set.add(data)
        
        for(let i =data+1; i <=s.length; i++){
            let subString = s.slice(data, i);
            
            if(map[subString] != undefined){
                
                if(i==s.length)return true
                
                queue.push(i)
                
                
            }
        }
    }
    
    
    return false
};
