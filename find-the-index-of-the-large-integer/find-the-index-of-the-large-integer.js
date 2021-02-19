/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var getIndex = function(reader) {
 let N = reader.length(),
        i = 0,
        j = N - 1,
        p = 0;                                      // \U0001f48e p is the pivot
    while (i <= j) {
        let k = Math.floor((i + j) / 2);
        if ((j - i) % 2)
            p = reader.compareSub(i, k, k + 1, j);  // ⭐️ even subarray has two non-overlapping "middles": k, k + 1
        else
            p = reader.compareSub(i, k, k, j);      // ⭐️ odd subarray has a single overlapping "middle": k
        if (!p) return k;      // \U0001f3af found ✅
        if (p < 0) i = k + 1;  // \U0001f50d search \U0001f449
        if (0 < p) j = k;      // \U0001f50d search \U0001f448
    }
    return -1;  // \U0001f3af not found \U0001f6ab (invalid use case)
    
    
};