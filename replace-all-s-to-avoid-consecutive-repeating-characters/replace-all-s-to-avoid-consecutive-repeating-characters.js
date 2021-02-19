/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let arr = s.split("")
    let lookUp = "abcdefghijklmnopqrstuvwxyz"
    for(let i=0; i < arr.length; i++){
        
        if(s[i]=="?"){
            let prev = arr[i-1];
            let next = arr[i+1];
            
            for(let j =0; j < 26; j++){
                if(lookUp[j] != prev && lookUp[j] != next){
                    arr[i] = lookUp[j]
                    break
                }
            }
        }
        
    }
    
    return arr.join("")
};