/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let days = [1,2,3,4,5,6,7];
    
    
    let j = 0;
    let res = [];
    let start =0;
    
    while(n){
        
        
        if(j == days.length){
            
            start+=1;
            j=0
        }
        
        res.push(days[j]+ start)
        j++
        n--
    }
    
    
    console.log(res)
    return res.reduce((a,b)=> a+b,0)
    
};
