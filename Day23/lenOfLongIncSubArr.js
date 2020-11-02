function lenOfLongIncSubArr(arr) {
    let length = 0;
    let max = 0;
    let start = 0;
    let res = []; // want to see the data in subarray

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            length++;
        } else {
            if (length > max) {
                res = [];
                res.push(...arr.slice(start, i + 1));
                max = length;
            }
            length = 0;
            start = i + 1;
        }
    }


    return res.length;
}

let a = [5, 6, 3, 5, 7, 8, 9, 1, 2];
console.log(lenOfLongIncSubArr(a));
a = [];
console.log(lenOfLongIncSubArr(a));