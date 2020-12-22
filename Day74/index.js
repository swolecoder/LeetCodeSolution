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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function (root, u) {
    if (!root) return null;

    let queue = [root];

    while (queue.length) {
        let len = queue.length;

        for (let i = 0; i < len; i++) {

            let data = queue.shift();

            //check
            if (data.val == u.val) {

                if (i == len - 1) return null;

                return queue.shift()

            }

            if (data.left) queue.push(data.left);
            if (data.right) queue.push(data.right)

        }
    }

    return null
};