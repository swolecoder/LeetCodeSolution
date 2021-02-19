/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */

class Heap {
  constructor(comparator) {
    this.arr = [];
    this.comparator = comparator;
  }

  getL() {
    return this.arr.length;
  }

  getPIdx(i) {
    return Math.floor((i - 1) / 2);
  }

  getLIdx(i) {
    return 2 * i + 1;
  }

  getRIdx(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }

  peek() {
    if (!this.arr.length) return null;
    return this.arr[0];
  }

  pop() {
    if (!this.arr.length) return null;
    if (this.arr.length === 1) return this.arr.pop();
    const res = this.arr[0];
    // Move last item from end to head
    this.arr[0] = this.arr.pop();
    this.heapifyDown();
    return res;
  }

  add(n) {
    this.arr.push(n);
    this.heapifyUp();
  }

  // Default idx is the first idx
  heapifyDown(idx = 0) {
    let p = idx;
    let c;
    // Compare parent with its children and swap with target child if necessary
    // Do it in a loop
    while (this.getLIdx(p) < this.arr.length) {
      // Get target child first
      if (
        this.getRIdx(p) < this.arr.length &&
        this.comparator(this.arr[this.getRIdx(p)], this.arr[this.getLIdx(p)]) <
          0
      )
        c = this.getRIdx(p);
      else c = this.getLIdx(p);
      // Compare with parent, if not valid, break
      if (this.comparator(this.arr[p], this.arr[c]) <= 0) break;
      // Swap
      this.swap(p, c);
      p = c;
    }
  }

  // Default idx is the last idx
  heapifyUp(idx = this.arr.length - 1) {
    let c = idx;
    let p = null;
    // While has parent
    while (c) {
      p = this.getPIdx(c);
      if (this.comparator(this.arr[p], this.arr[c]) <= 0) break;
      // Swap
      this.swap(p, c);
      c = p;
    }
  }

  heapify(A) {
    // Bottom up
    // Heapify down each item
    this.arr = A;
    for (let i = Math.floor(A.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  delete(n) {
    const idx = this.arr.indexOf(n);
    this.arr[idx] = this.arr[this.arr.length - 1];
    this.arr.pop();
    this.heapifyDown(idx);
  }
}
var eatenApples = function(A, D) {
  
  let res = 0;
  let i = 0; // idx of days
  const minHeap = new Heap((a, b) => a[0] - b[0]); // [rotten day, apple count]
  while (i < A.length || minHeap.getL()) {
    if (i < A.length && A[i] > 0) minHeap.add([i + D[i], A[i]]);
    while (minHeap.getL() && (minHeap.peek()[0] <= i || minHeap.peek()[1] <= 0))
      minHeap.pop();
    if (minHeap.getL()) {
      res++;
      minHeap.peek()[1]--;
    }
    i++;
  }
  return res;
    
};