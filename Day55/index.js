var titleToNumber = function (s) {


    let index = 0;

    let res = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let power = Math.pow(26, index);
        index++;

        let calVal = power *  (s[i].charCodeAt() - 'A'.charCodeAt() + 1);
        res += calVal
    }

    return res;

}