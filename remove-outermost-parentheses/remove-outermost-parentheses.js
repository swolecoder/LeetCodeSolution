/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    //"( ()())(())"
    // 
    
    let c = 0;
    let res = ""
    for(let i=0; i < S.length; i++){
        if(S[i] == "("){
            c++;
            if(c >=2){
                res += S[i]
            }
        }else{
            c--;
            if(c >=1){
                res += S[i]
            }
        }
    }
    
    return res
};