        
    }
​
}
var indexPairs = function(text, words) {
   
    const t = new Trie();
    const {trie} = t;
    
    for(let w of words){
        t.insert(w)
    }
    
    console.log(trie)
    
    let result = [];
    for(let i=0; i < text.length; i++){
        
        let j = i;
        
        let node = trie[text[j]];
        
        
        while(node && j < text.length){
            
            if(node['end'])result.push([i,j])
            j++;
            node = node[text[j]]
        }
    }
        
        
        
        
      return result  
        
        
        
        
        
        
        
        
    
};
