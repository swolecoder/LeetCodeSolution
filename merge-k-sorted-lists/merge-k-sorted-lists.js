/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    
    let result = [];
    
    for(let i=0; i < lists.length; i++){
        
        let curr = lists[i];
        
        while(curr){
            result.push(curr.val);
            curr = curr.next
        }
    }
    
    console.log(result)
    result.sort((a,b)=> a-b);
    
    let dummyN = new ListNode(-1);
    let r = dummyN;
    
    for(let i=0; i < result.length; i++){
        dummyN.next = new ListNode(result[i]);
        dummyN = dummyN.next
        
    }
    
    
    
    
    
    return r.next
};
