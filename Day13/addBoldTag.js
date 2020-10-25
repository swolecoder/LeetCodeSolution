var addBoldTag = function (s, dict) {
    let checker = new Array(s.length).fill(false);

    for (let word of dict) {
        let start = s.indexOf(word);
        while (start > -1) {
            let end = start + word.length;
            for (let i = start; i < end; i++) {
                checker[i] = true;
            }
            start = s.indexOf(word, start + 1);
        }
    }

    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (checker[i] && ((i == 0) || !checker[i - 1])) {
            res += "<b>";
        }
        res += s[i];
        if (checker[i] && (i === s.length - 1 || !checker[i + 1])) {
            res += "</b>";
        }
    }
    return res;
};