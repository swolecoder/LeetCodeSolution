/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {

    if (!root) return null;
    let head = null;
    let prev = null;

    function inOrder(node) {
        if (!node) return null;
        inOrder(node.left);

        //do stuff
        if (prev == null) {
            prev = node
            head = node
        } else {
            node.left = prev;
            prev.right = node;
            prev = node
        }

        inOrder(node.right)
    }
    inOrder(root);

    head.left = prev;
    prev.right = head;
    return head
};