/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  
   let res = "";
    
   while( n >0){
     n--;
     res = String.fromCharCode(65 + n % 26) + res
     n = parseInt(n/26)
     
  }
console.log(res)
    
    return res
};