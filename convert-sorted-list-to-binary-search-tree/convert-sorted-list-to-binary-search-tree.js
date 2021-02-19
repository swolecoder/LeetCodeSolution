/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(!head)return null
    
    return helper(head,null)
    
    function helper(start, end){
        if(start == end)return null;
        
        
        let s = start;
        let f = start;
        
        while(f != end && f.next != end){
            f = f.next.next;
            s =s.next;
 
        }
        
        const node = new TreeNode(s.val)
        node.left = helper(start, s)
        node.right = helper(s.next,end)
        
        
        return node;
        
    }
};