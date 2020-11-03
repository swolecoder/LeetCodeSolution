/**
 * @param {string} s
 * @return {number}
 */

/*
Time Complexity: \mathcal{O}(n)O(n), where nn is the length of the string ss. We iterate over the string ss at most twice.

Space Complexity: \mathcal{O}(n)O(n), where nn is the length of the string ss.

*/
var calculate = function (s) {

    let stack = [];
    let preSign = "+";

    let currentNum = "";

    for (let i = 0; i <= s.length; i++) {

        // Number
        if (!isNaN(s[i])) {
            currentNum += s[i];
        }

        //empty space continue
        if (s[i] == " ") continue;

        if (isNaN(s[i])) {
            let sign = s[i];
            let num = Number(currentNum);
            switch (preSign) {
                case "+": {
                    stack.push(Number(num));
                    break;
                }
                case "-": {
                    stack.push(Number(-num));
                    break;
                }
                case "*": {
                    stack.push(stack.pop() * num);
                    break;
                }
                case "/": {
                    stack.push(parseInt(stack.pop() / num));
                    break;
                }
            }
            //reassign
            preSign = sign;
            currentNum = ""
        }
    }
    return stack.reduce((a, b) => a + b, 0);
}

/*


Time Complexity: O(n)
Space Complexity: O(1)


*/

var calculateMethod2 = function (s) {

    let result = 0;
    let currentNum = "";
    let presign = "+";
    let lastNum = 0;


    for (let i = 0; i <= s.length; i++) {
        if (s[i] == " ") continue;

        if (!isNaN(s[i])) {
            currentNum += s[i]
        }

        if (isNaN(s[i])) {
            let num = Number(currentNum);
            switch (presign) {
                case "+": {

                    result += lastNum;
                    lastNum = num;
                    break;
                }
                case "-": {
                    result += lastNum;
                    lastNum = -num;
                    break;
                }
                case "/": {
                    lastNum = parseInt(lastNum / num)
                    break;
                }
                case "*": {
                    lastNum = lastNum * num;
                    break;
                }
            }
            presign = s[i];
            currentNum = ""

        }
    }

    return result +=lastNum;

}
console.log(calculateMethod2("3+2*2"));
console.log(calculateMethod2(" 3/2 "));
console.log(calculateMethod2(" 3+5 / 2 "));
console.log(calculateMethod2("12-3*4"));

console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));