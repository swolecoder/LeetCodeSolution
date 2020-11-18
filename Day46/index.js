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
var isCompleteTree = function (root) {
    if (!root) return false;

    let queue = [root];
    let flag = false;

    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let data = queue.shift();

            if (!data) {
                flag = true;
            } else {

                if (flag) return false;
                queue.push(data.left);


                queue.push(data.right);
            }
        }

    }

    return true;
};