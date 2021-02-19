    constructor(){
        this.trie = {}
    }
    
    insert(word){
        let node = this.trie;
        
        for(let w of word){
            if(!(w in node))node[w] = {};
            node = node[w]
        }
        node['endW'] = true;
        node['foundW'] = word
    }
    
    
}
var longestWord = function(words) {
    const t = new Trie();
    const {trie} = t;
    
    words.sort();
    for(let w of words){
        t.insert(w)
    }
    
    let queue = [[trie, 0, ""]]
    
    
    let max  = ""
    let count = -Infinity;
    
    while(queue.length > 0){
        
        let [data, step, w] = queue.shift();
​
           
        if(data['endW'] != undefined && step > count){
            count  = step;
            max = data['foundW']
            console.log(step,data['endW'],data['foundW'])
        }
        
          if(step > 0 && data['endW'] == undefined){
           continue
        }
        for(let [key,val] of Object.entries(data)) queue.push([val, step+1,""])
        
        
    }
    
    
    
    return max
    
    
    
    
    
};
