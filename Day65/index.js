/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function (root) {
    let map = new Map();

    function dfs(node) {
        if (!node) return null;
        if (map.has(node)) return map.get(node);

        let d = new NodeCopy(node.val);
        map.set(node, d);
        d.left = dfs(node.left)
        d.right = dfs(node.right)
        d.random = dfs(node.random)
        return d;

    }

    return dfs(root)
};