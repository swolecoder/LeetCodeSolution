/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {


    let queue = [root];

    while (queue.length) {

        let len = queue.length;
        let previous = null;

        for (let i = 0; i < len; i++) {

            let currentData = queue.shift();

            // console.log("Data", currentData.val)

            if (!currentData) continue;

            if (previous != null) {

                //do stuff here
                previous.next = currentData;

            }
            previous = currentData


            //left
            if (currentData.left) {
                queue.push(currentData.left)
            }

            //right
            if (currentData.right) {
                queue.push(currentData.right)
            }

        }
    }
    return root


};