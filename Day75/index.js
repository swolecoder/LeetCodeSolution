/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let flag = true

    height(root);
    return flag;

    function height(node){
        if(!node)return 0;

        if(!flag) return;

        let left = height(node.left);
        let right = height(node.right);

        //check
        if(Math.abs(left-right) > 1)flag = false

        return Math.max(left,right)+1
    }
};