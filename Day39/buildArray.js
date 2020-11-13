/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {

    let res = [];
    let j = 0;
    let max = Math.max(...target);


    for (let i = 1; i <= max; i++) {
        if (i == target[j]) {
            res.push("Push");
            j++;
        } else {
            res.push("Push");
            res.push("Pop")
        }

    }

    return res;
};