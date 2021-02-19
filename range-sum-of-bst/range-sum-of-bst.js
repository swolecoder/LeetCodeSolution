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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    let result = [];
    
    function dfs(node){
        if(!node) return null;
        
        dfs(node.left)
        //do something
        if(node.val >= low && node.val <= high){
            result.push(node.val)
        }
        
        dfs(node.right)
  
    }
    dfs(root)
    console.log(result)
    
    return result.reduce((a,b)=> a+b,0)
    
    
    
};