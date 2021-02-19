/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
    let swap = new Array(A.length).fill(A.length);
    let unswap = new Array(A.length).fill(A.length);
    swap[0] =1;
    unswap[0] =0;
    
    
    for(let i =1; i < A.length; i++){
        
        
        if(A[i] > A[i-1] && B[i] > B[i-1]){
            swap[i] = Math.min(swap[i], swap[i-1] +1);
            unswap[i] = Math.min(unswap[i], unswap[i-1])
        }
        
         if(A[i] > B[i-1] && B[i] > A[i-1]){
            swap[i] = Math.min(swap[i], unswap[i-1]+1);
            unswap[i] = Math.min(unswap[i], swap[i-1])
        }

    }
    
    console.log(swap, unswap)
    
    return Math.min(swap[A.length-1],unswap[A.length-1])

};