/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {

    let stack = [];
    let i = 0; //pointing to pushed
    let j = 0; //pointing to popped

    while (i < pushed.length) {
        stack.push(pushed[i]);
        i++;

        while (stack.length > 0 && j < popped.length && stack[stack.length - 1] == popped[j]) {
            stack.pop();
            j++;
        }
    }

    return stack.length == 0
};