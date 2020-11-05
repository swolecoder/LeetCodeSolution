/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */

 //Note think about improvement
var assignBikes = function (workers, bikes) {
    let distanceArray = [];

    function distance(a, b) {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    }

    for (let i = 0; i < workers.length; i++) {
        let w = workers[i]; //worker
        for (let j = 0; j < bikes.length; j++) {
            let b = bikes[j];//bike
            let distance = distance(w, b);
            distanceArray.push([distance, i, j])
        }
    }

    //sort it distance, worker or bike
    distanceArray.sort((a, b) => {
        return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
    })


    let result = [];
    let bikesAssigned = new Set();

    for (let i = 0; i < distanceArray.length; i++) {
        let w = distanceArray[i][1];
        let b = distanceArray[i][2];

        if (res[w] == null && !bikesAssigned.has(b)) {
            res[w] = b;
            bikesAssigned.add(b);
        }
    }


    return result;

}