/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};

    for(let i=0; i < nums.length; i++){
        let y = target - nums[i];

        if((y in map)){
            return [map[y], i]
        }else{
            map[nums[i]] = i;
        }
    }

    return [-1,-1]
};