/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (S, words) {
    function isStrechy(word) {
        let i = 0;
        let j = 0;

        while (i < S.length && j < word.length) {
            let e1 = i;
            let e2 = j

            let c1 = S[e1];
            let c2 = word[e2];
            if (c1 !== c2) return false;

            while (e1 < S.length && S[e1] == c1) {
                e1++
            }

            while (e2 < word.length && word[e2] == c2) {
                e2++
            }


            let len1 = e1 - i;
            let len2 = e2 - j;

            if ((len1 < len2) || (len1 < 3 && len1 != len2)) {
                return false
            }

            i = e1;
            j = e2;

        }

        if (i == S.length && j == word.length) {
            return true
        }

        return false
    }

    let count = 0;
    for (let i = 0; i < words.length; i++) {

        let checker = isStrechy(words[i])
        if (checker) count++
    }

    return count
};