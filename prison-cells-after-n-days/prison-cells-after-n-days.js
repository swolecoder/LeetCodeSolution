/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    
​
    let map = {};
    
    let checker = false;
    let count = 0;
    
    for(let i=0; i < N; i++){
        let a  = helper(cells);
        
        if((a.join("") in map)){
            checker = true
            break
        }else{
              map[a.join("")] = true
             cells = a;
            count++;
            
        }
​
    }
    
    if(checker){
        console.log("AHish")
         let len = N % count;
        for(let i= 1 ; i <=len; i ++){
            cells = helper(cells)
        }
        return cells
        
    }
    
    return cells
    function helper(compare){
        
        let data = new Array(compare.length).fill(0);
        
        for(let i =1; i <compare.length-1; i++){
            if(compare[i-1] == compare[i+1])data[i] =1
        }
        
        return data
    }
