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
var boundaryOfBinaryTree = function(root) {
    function isLeaf(node){
        return node &&!node.left && !node.right
    }
    
    if (!root) {
        return [];
    }
    
    
    let left = [];
    function dfsLeft(node){
        if(!node ||isLeaf(node) )return
        
        left.push(node.val)
        
        if(node.left){
            dfsLeft(node.left)
        }else{
            dfsLeft(node.right)
        }
    }
    let right = [];
     function dfsRight(node){
        if(!node ||isLeaf(node) )return
        
        
        
        if(node.right){
            dfsRight(node.right)
        }else{
            dfsRight(node.left)
        }
         
         right.push(node.val)
    }
    
    
    let leaf =[]
    function print(node){
        if(!node)return
        
        if(isLeaf(node)){
           leaf.push(node.val) 
        }
        
        print(node.left)
        print(node.right)
    }
    
    
    
    dfsLeft(root.left)
    dfsRight(root.right)
    print(root.left)
     print(root.right)
    console.log(left)
    
     console.log(right)
    console.log(leaf)
    
    return [root.val,...left,...leaf,...right]
    
};