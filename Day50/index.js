/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {


    let res = "";
    if (!s) return res;

    //expand around the center
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {

            let start = i;
            let end = i + j;

            while (start >= 0 && end <= s.length && s[start] == s[end]) {
                start--;
                end++
            }

            let intial = start + 1;
            let e = end;

            if (res.length < s.substring(intial, e).length) {

                res = s.substring(intial, e)
            }
        }
    }

    return res;
};