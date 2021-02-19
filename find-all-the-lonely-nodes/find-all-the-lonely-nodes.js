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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    
    
    let queue = [root];
    
    let result = [];
    
    
     while(queue.length){
         
         let data = queue.shift();
         
         if(!data.left && data.right)result.push(data.right.val);
         if(!data.right && data.left)result.push(data.left.val);
         
         
         if(data.left)queue.push(data.left);
         if(data.right)queue.push(data.right)
 
     }
    
    console.log(result)
    
    return result
};