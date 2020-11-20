/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    /*
      [1,2,3,4]

      r= [1,1,2,3]
      l=[  24,12, 4,1]

    */

    let a = [];
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        a.push(product);
        product *= nums[i]
    }

    let b = [];
    product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        b.unshift(product);
        product *= nums[i]
    }

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(a[i] * b[i])
    }

    return result
};