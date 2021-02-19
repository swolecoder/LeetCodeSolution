/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
    
    
    
    let res = [...S];
    
    for(let i=0; i < sources.length; i++){
        let len = sources[i].length;     
        let start = indexes[i]
        let data = S.substring(start, start+ len).indexOf(sources[i]);
        if(data > -1){
          for(let k = start ; k < start+len; k++){
              res[k] =""
          }
          res[start] = targets[i]
    
        }

    }
    
    console.log(res)

    return res.join("")
};