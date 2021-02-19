/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    
    let d = new ListNode(-1);
    let res = d;
    
    let sum = 0;
    let carry = 0;
    
    
    while(l1 || l2 || carry){
        sum = ((l1 && l1.val) || 0) + ((l2&&l2.val) || 0) + carry
        
        d.next = new ListNode(sum % 10)
        
        carry = sum > 9 ? 1 : 0;
        
        d = d.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next
​
    }
    
    return res.next;
};
