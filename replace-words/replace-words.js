        
        let node = this.node;
        
        for(let w of word){
            if(!(w in node))node[w] = {};
            node = node[w]
        }
        
        node['end'] = true;
        node['word'] = word
    }
}
var replaceWords = function(dictionary, sentence) {
    
    const trie = new Trie();
    dictionary.forEach((w)=> trie.insert(w))
    
    const {node} = trie;
    
   sentence= sentence.split(" ");
    
    
    let result = [];
    for(let w of sentence){
        let {ans=false,word=""} = helper(node, w)
        if(ans){result.push(word)}
        else{result.push(w)}
    }
    
   // hellper()
   function helper(n, word){
       
       
      for(let i=0; i < word.length; i++){
       //   console.log(n)
          if(n['end'] == true){
              return {
                  "ans": true,
                  "word": n['word']
              }
          }
          
          if(n[word[i]] == undefined){
               return {
                  "ans": false,
                  "word": ""
              }
          }
          
          n = n[word[i]]
          
      }
       
       return {
           "ans": false,
                  "word": ""
       }
   }
    
   // console.log(result)
    return result.join(" ")
};
