/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    
    let  res = [];
    
    res.push([]);
    
    let data = [];
    
    for(let i=0;i < nums.length; i++){
        let curr = nums[i];
        
        let len = res.length;
        
        for(let j=0; j < len; j++){
            
            let d = res.shift();
​
            for(let k =0; k < d.length+1; k++ ){
                  let copy = d.slice();
            
            copy.splice(k, 0, curr);
            res.push(copy)
            
            if(copy.length== nums.length){
                data.push(copy)
            }
            }
​
        }
    }
    
    return data
};
