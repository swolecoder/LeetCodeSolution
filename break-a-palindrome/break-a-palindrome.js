/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if(palindrome.length <=1)return "";
    
    
    let s = palindrome.split("");
    let len = Math.floor(s.length /2)
    
    for(let i=0; i < len; i++){
        
        if(s[i] > 'a'){
            s[i] = 'a';
            
            return s.join("")
        }
    }
    
    s[s.length-1] = 'b';
    return s.join("")
};