/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.arr = []
    this.snapCount = 0;
    this.snapMap = new Map(); // id -> array
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.arr[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapCount++;
    let snap_id = this.snapCount-1;
    let snapshot = [...this.arr] // make a copy of the snapshot
    this.snapMap.set(snap_id, snapshot);
    return snap_id;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let arrAtSnapID = this.snapMap.get(snap_id);
    return arrAtSnapID[index] === undefined ? null : arrAtSnapID[index]
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */