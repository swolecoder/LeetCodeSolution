/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
/*
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

*/

let p1= m-1;
let p2= n-1;

for(let i= n+m-1; i>=0; i--){
    if(p2 < 0)break;

    if(nums1[p1] > nums2[p2]){
        nums1[i] = nums1[p1];
        p1--
    }else{
        nums1[i] = nums2[p2];
        p2--
    }
}

return nums1;
}