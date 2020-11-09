module.exports = {
    //param A : array of integers
    //param B : array of integers
    //return an integer
    coverPoints: function (A, B) {

        let total = 0;

        for (let i = 0; i < A.length - 1; i++) {
            total += Math.max(Math.abs(A[i] - A[i + 1]), Math.abs(B[i] - B[i + 1]))
        }

        return total;
    }
};
