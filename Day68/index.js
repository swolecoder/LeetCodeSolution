/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {

    let map = {};
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let sum = A[i] + B[j];

            if (!(sum in map)) {
                map[sum] = 1;
            } else {
                map[sum]++;
            }
        }
    }

    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++) {
            let sum = C[i] + D[j];

            if (map[-sum] != null) {
                count += map[-sum]
            }
        }
    }


    return count;
};