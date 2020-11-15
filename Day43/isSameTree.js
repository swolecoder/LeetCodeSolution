//Iterative & Recursive
var isSameTree = function (p, q) {

    if (p == null && q == null) return true;

    if ((p && !q) || (!p && q) || p.val !== q.val) return false;

    let left = isSameTree(p.left, q.left);
    let right = isSameTree(p.right, q.right);

    return left && right
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    if ((p && !q) || (q && !p)) return false;


    let stack = [[p, q]];


    while (stack.length) {

        let [p1, q1] = stack.pop();

        if (!p1 && !q1) continue;

        if ((p1 && !q1) || (q1 && !p1)) return false;

        if (p1.val !== q1.val) return false;

        stack.push([p1.left, q1.left]);
        stack.push([p1.right, q1.right])

    }

    return true
};