/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {

    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let map = {};

    for (let i = 0; i < 26; i++) {
        map[upper[i]] = lower[i];
    }
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in map)) {
            res += str[i]
        } else {
            res += map[str[i]]
        }
    }
    return res;
};