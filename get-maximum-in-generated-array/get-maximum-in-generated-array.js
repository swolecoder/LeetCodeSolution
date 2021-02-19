/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    
    
    let a = new Array(n+1).fill(0);
    if(n < 2) return n;
    a[1] =1
    
    for(let i=2; i <=n ;i++){
       
        if(i%2 == 0){
             console.log("Ashish",a[Math.floor(i/2)])
            a[i] = a[Math.floor(i/2)]
        }else{
            a[i] = a[Math.floor(i/2)] + a[Math.floor(i/2) +1]
        }
    }
    
    console.log(a)
    return Math.max(...a)
};
