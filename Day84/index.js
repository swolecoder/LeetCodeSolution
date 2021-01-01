/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {


    let map = {};

    for (let p of pieces) {
        let data = p[0];
        if (!(data in map)) map[data] = [];
        map[data].push(...p)
    }

    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            res.push(...map[arr[i]])
        }
    }

    console.log(res)
    return arr.join("") == res.join("")
};