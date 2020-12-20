/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function (S, K) {


    let size = 0;

    for (let i = 0; i < S.length; i++) {

        if (!isNaN(S[i])) {
            size *= Number(S[i])
        } else {
            size++
        }
    }


    for (let i = S.length - 1; i >= 0; i--) {
        K = K % size;
        if (K == 0 && isNaN(S[i])) {
            return S[i]
        }
        if (!isNaN(S[i])) {
            size = Math.ceil(size / Number(S[i]))
        } else {
            size--;
        }

    }
};