/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];

    function recursiveHelper(array, target, startIndex, runningArray) {

        //edge case would be
        if (target == 0) {
            result.push(runningArray)
        }


        for (let i = startIndex; i < array.length; i++) {

            if (target - array[i] < 0) return;

            runningArray.push(array[i])
            recursiveHelper(array, target - array[i], i, [...runningArray]);

            //pop that data
            runningArray.pop();

        }

    }

    candidates.sort((a, b) => a - b);
    recursiveHelper(candidates, target, 0, []);

    return result;

};