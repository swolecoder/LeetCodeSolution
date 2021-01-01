/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {


    let map = {};

    for (let i = 0; i < s.length; i++) {
        let key = s[i];

        if (!(key in map)) {
            map[key] = 1
        } else {
            delete map[key]
        }
    }

    let hasPalindrome = Object.keys(map).length > 1 ? false : true
    return hasPalindrome

};