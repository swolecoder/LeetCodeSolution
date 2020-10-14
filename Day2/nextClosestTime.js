/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function (time) {

    let timeSplit = time.split(":");
    let totalTime = Number(timeSplit[0]) * 60 + Number(timeSplit[1]);

    let map = {};//use map or set

    for (let t of time) {
        if (t == ":") continue;
        map[t] = true
    }

    while (true) {

        totalTime = (totalTime + 1) % (24 * 60);

        const digits = [
            totalTime / 60 / 10,
            totalTime / 60 % 10,
            totalTime % 60 / 10,
            totalTime % 60 % 10
        ].map(d => Math.floor(d));

        let isValid = true;
        for (let d of digits) {
            if (d == ":") continue
            if (!(d in map)) {
                isValid = false
            }
        }

        if (isValid) {
            let d = `${digits[0]}${digits[1]}` + ":" + `${digits[2]}${digits[3]}`
            return d
        }

    }
};