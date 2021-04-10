var Heap = (function () {
  function Heap() {
    this.arr = [];
  }

  function heapifyUp(arr, idx) {
    if (!idx) return;

    var parent = parseInt(idx - 1 / 2);

    if (arr[parent] > arr[idx]) return;

    var temp = arr[parent];
    arr[parent] = arr[idx];
    arr[idx] = temp;

    heapifyUp(arr, parent);
  }

  function heapifyDown(arr, idx) {
    var leftIdx = idx * 2 + 1;
    var rightIdx = leftIdx + 1;

    if (leftIdx >= arr.length) return;

    var left = arr[leftIdx];
    var right = rightIdx < arr.length ? arr[rightIdx] : 0;

    var largeIdx = left > right ? leftIdx : rightIdx;

    if (arr[idx] >= arr[largeIdx]) return;

    var temp = arr[idx];
    arr[idx] = arr[largeIdx];
    arr[largeIdx] = temp;

    heapifyDown(arr, largeIdx);
  }

  Heap.prototype.insert = function (number) {
    var last = this.arr.length;
    this.arr[last] = number;
    heapifyUp(this.arr, last);
    return last;
  };

  Heap.prototype.delete = function () {
    if (this.arr.length === 0) {
      throw new Error('Stack underflow');
    } else if (this.arr.length === 1) {
      return this.arr.pop();
    }

    var remove = this.arr[0];
    this.arr[0] = this.arr.pop();
    heapifyDown(this.arr, 0);
    return remove;
  };

  Heap.prototype.sort = function () {
    var sorted = [];
    var count = this.arr.length;

    for (let i = 0; i < count; i++) {
      sorted.push(this.delete());
    }

    return sorted;
  };

  return Heap;
})();

var heap = new Heap();
// console.log(heap.delete());
heap.insert(5);
heap.insert(3);
heap.insert(4);
heap.insert(7);
heap.insert(2);
heap.delete();
console.log(heap.arr);
console.log(heap.sort());
