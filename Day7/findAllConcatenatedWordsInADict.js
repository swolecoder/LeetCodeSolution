/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {


    let set = new Set(words);//can use map aswell for cxonstant time lookup
    let list = [];

    for (let i = 0; i < words.length; i++) {
        if (checker(words[i])) {
            list.push(words[i])
        }
    }

    return list;

    function checker(word) {

        for (let i = 1; i < word.length; i++) {
            let left = word.substring(0, i);
            let right = word.substring(i);
            if (set.has(left)) {
                if (set.has(right) || checker(right)) {
                    return true;
                }
            }
        }
        return false
    }

}