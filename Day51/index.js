/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {

    /*

    Let's create two arrays prefix and suffix where prefix[i] is the minimum length of sub-array ends before i and has sum = k, suffix[i] is the minimum length of sub-array starting at or after i and has sum = k.
The answer we are searching for is min(prefix[i] + suffix[i]) for all values of i from 0 to n-1 where n == arr.length.
    */
    let sum = 0;
    let mapLeft = { "0": "-1" };
    let best = Infinity;
    let left = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

        if ((sum - target) in mapLeft) {
            best = Math.min(best, i - mapLeft[sum - target])
        }

        left[i] = best;
        mapLeft[sum] = i;
    }

    sum = 0;
    let right = new Array(arr.length);
    let rightMap = { "0": arr.length };
    best = Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];

        if ((sum - target) in rightMap) {
            best = Math.min(best, rightMap[sum - target] - i)
        }

        right[i] = best;
        rightMap[sum] = i;

    }

    let result = Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (left[i - 1] != Infinity && right[i] != Infinity) {
            result = Math.min(result, left[i - 1] + right[i])
        }
    }


    return result == Infinity ? -1 : result
};