
//method1
var shortestDistance = function (words, word1, word2) {
    let result = Infinity;

    for (let i = 0; i < words.length; i++) {
        if (words[i] == word1) {

            for (let j = 0; j < words.length; j++) {

                if (words[j] == word2) {


                    result = Math.min(result, Math.abs(j - i))
                }
            }
        }
    }
    return result;
}


//method2
var shortestDistance = function (words, word1, word2) {
    let map = {};

    for (let i = 0; i < words.length; i++) {
        if (!(words[i] in map)) {
            map[words[i]] = [];
        }

        map[words[i]].push(i)
    }

    let valOfWord1 = map[word1];
    let valOfWord2 = map[word2];

    let res = Infinity;

    for (let i = 0; i < valOfWord1.length; i++) {
        for (let j = 0; j < valOfWord2.length; j++) {
            res = Math.min(res, Math.abs(valOfWord1[i] - valOfWord2[j]))
        }
    }

    return res
}

//method3
var shortestDistance = function (words, word1, word2) {

    let res = Infinity;
    let i = -1;
    let j = -1;

    for (let k = 0; k < words.length; k++) {
        if (words[k] == word1) {
            i = k
        }
        if (words[k] == word2) {
            j = k
        }

        if (i > -1 && j > -1) {
            res = Math.min(res, Math.abs(j - i))
        }
    }

    return res;
}