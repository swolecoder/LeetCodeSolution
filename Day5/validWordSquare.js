//422. Valid Word Square

var validWordSquare = function (words) {
    for (let i = 0; i < words.length; i++) {
        let res = ""
        for (let j = 0; j < words.length; j++) {
            res += words[j][i] || ''
        }

        console.log(res, words[i])

        if (res != words[i]) return false
    }

    return true
};