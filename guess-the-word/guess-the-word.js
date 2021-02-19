/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */


function match(w1,w2){
    let count = 0;
    
    for(let i=0; i < w1.length; i++){
        if(w1[i]==w2[i])count++
    }
    return count;
}
var findSecretWord = function(wordlist, master) {
    wordlist.sort();
    for(let i=0; i < 10; i++){
        
        let word = wordlist[0]
        const N = master.guess(word)
        if(N==6)return
        const temp = wordlist.filter((d)=> match(d,word) == N)
        wordlist = temp;
    }   
    
};