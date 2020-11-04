/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    let start = intervals.slice().sort((a, b) => a[0] - b[0]);
    let end = intervals.slice().sort((a, b) => a[1] - b[1]);
    console.log(start);
    console.log(end)

    let room = 0;
    let j = 0;

    for (let i = 0; i < start.length; i++) {
        if (start[i][0] < end[j][1]) {
            room++
        } else {
            j++
        }
    }
    return room;
};