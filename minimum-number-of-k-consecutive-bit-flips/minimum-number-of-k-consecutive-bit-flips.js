/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
    /*
    
    You'd use a bit mask of all 1s for XOR

         1 ^ 1 = 0
         0 ^ 1 = 1
    
    */
    
    let ans = 0;
    
    for(let i =0; i < A.length;i++){
        if(A[i] == 0){
            if(i+K > A.length)return -1;
            
            for(let j = i ; j < i+K; j++){
                A[j] = A[j] ^ 1;
                
            }
            ans++
        }
    }
    
    return ans
};