/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {

    let res = [];
    function isPalindrone(str) {

        let left = 0;
        let right = str.length - 1;
        while (left <= right) {
            if (str[left] != str[right]) return false;
            left++;
            right--;
        }
        return true;
    }


    function helper(s, temp) {

        if (s.length == 0) {
            res.push([...temp])
            return;
        }

        for (let i = 0; i < s.length; i++) {
            let leftSubString = s.slice(0, i + 1);

            if (isPalindrone(leftSubString)) {
                temp.push(leftSubString)
                helper(s.slice(i + 1), [...temp]);
                temp.pop()
            }
        }
    }

    helper(s, []);

    return res
};