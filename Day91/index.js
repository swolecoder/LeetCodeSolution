/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {



    let map = {};

    for(let i=0; i< nums.length; i++){
        map[nums[i]] = (map[nums[i]]|| 0)+1
    }

    let res = [];
    let keys = Object.keys(map);


    while(keys.length > 0){

        let temp = []
        let falge = false
        for(let i=0; i <k ;i ++){
            if(keys[i] == undefined){
                falge = true;
                break
            }
            temp.push(keys[i]);

            //return false if its not Consecutive Numbers
            if(i > 0 && +keys[i-1]+1 != keys[i]) return false

             if(map[keys[i]] == 0){
                 delete map[keys[i]]
             }
            else{
                map[keys[i]]--
                if(map[keys[i]] <= 0){
                 delete map[keys[i]]
             }
            }

        }
        if(falge)return false

        //for(let i=0; i < )
        res.push(temp)
        keys = Object.keys(map)
    }


   if(keys.length > 0) return false

    return true

};