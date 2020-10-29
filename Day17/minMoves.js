/*

Idea: I originally thought of finding the largest value step by step, and then adding +1 to the other values ​​until the final result is the same.
Later found that you can reverse thinking, after finding the smallest value, the other minus 1, that is, find the difference between each number and the minimum value.
 Input : 123
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {

    let min = Math.min(...nums);
    let count = 0;

    for(let i =0; i < nums.length;i++){
        count += nums[i] - min
    }

    return  count;


}