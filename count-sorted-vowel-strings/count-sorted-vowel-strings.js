/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    
    
    let res = 0;
    
    
    function helper(index, arr){
        
        //base case
        
        if(arr.length == n){
            res++;
            return
        }
        
        
        for(let i= index; i <5; i++){
            arr.push(i);
            helper(i, arr)
            arr.pop()
       }
    }
    helper(0,[])
    
    return res
    
};
