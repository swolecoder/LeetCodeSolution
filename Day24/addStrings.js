/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let n1 = num1.length - 1;
    let n2 = num2.length - 1;

    let carry = 0;
    let res = "";

    while (n1 >= 0 || n2 >= 0 || carry) {
        let sum = (+num1[n1] || 0) + (+num2[n2] || 0) + carry;
        res = `${sum % 10}` + res;
        carry = Math.floor(sum / 10)

        n1--
        n2--
    }

    return res
};