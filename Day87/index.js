/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(o, c, target) {


    let q1 = [o];
    let q2 =[c];

    while(q1.length){

        let data1 = q1.shift();
        let data2 = q2.shift();

        if(data1.val == target.val){
           return data2;
        }

        if(data1.left){
            q1.push(data1.left);
            q2.push(data2.left)
        }

        if(data1.right){
            q1.push(data1.right)
            q2.push(data2.right)
        }

    }

    return -1
};