/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    let num = number.split("").filter((d) => d != "-" && d != " ");
    let result = [];

    if (num.length <= 3) return num.join("")

    let len = num.length;
    let res = [];

    for (let i = 0; i < num.length; i++) {

        if (i + 4 >= len) {
            console.log("Ashish", num.slice(i, i + 4))

            let len = num.slice(i, i + 4).length;

            if (len <= 3) {
                res.push(num.slice(i, i + 4).join(""));
                break
            }



            if (len == 4) {
                res.push(num.slice(i, i + 2).join(""));
                res.push(num.slice(i + 2).join(""));
                break
            }


        } else {
            res.push(num.slice(i, i + 3).join(""));
            i += 2
        }

    }
    console.log(res)
    return res.join("-")
};