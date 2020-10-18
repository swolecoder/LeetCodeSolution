/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
    function flip(s) {
        let data = s.split("");
        for (let i = 0; i < data.length; i++) {
            if (i % 2 != 0) {
                let d = Number(data[i]) + a
                data[i] = d % 10
            }
        }
        data = data.join("")
        return data
    }

    function rotate(s) {
        return s.slice(b) + s.slice(0, b)
    }

    let q = [s];
    let seen = new Set();

    while (q.length) {

        let d = q.pop();

        if (!seen.has(d)) {
            seen.add(d);

            q.push(flip(d))
            q.push(rotate(d))
        }
    }

    let d = Array.from(seen)
    let min = Infinity;
    let returnS = ''

    //better way to do this
    for (let i = 0; i < d.length; i++) {
        let f = Number(d[i]);
        if (f < min) {
            min = f
            returnS = d[i]
        }
    }

    return returnS

};