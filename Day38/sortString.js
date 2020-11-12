/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    let chars = s.split('').sort(), res = [], map = {}, inserted = true

    let set = Array.from(new Set(chars));

    for (let i = 0; i < chars.length; i++) {
        if (!map[chars[i]]) map[chars[i]] = 0
        map[chars[i]]++
    }

    while (inserted) {
        inserted = false;
        for (let i = 0; i < set.length; i++) {
            if (map[set[i]]) {
                res.push(set[i]);
                map[set[i]]--;
                inserted = true;
            }
        }
        set.reverse();
    }


    return res.join("");
};