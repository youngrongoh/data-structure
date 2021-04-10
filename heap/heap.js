const Heap = (() => {
  class Heap {
    constructor() {
      this.arr = [];
    }

    insert(value) {
      const last = this.arr.length;

      this.arr[last] = value;

      heapifyUp(this.arr, last);
    }

    delete() {
      const count = this.arr.length;

      if (count === 0) {
        throw new Error('Stack underflow');
      }

      if (count === 1) return this.arr.pop();

      const removed = this.arr[0];

      this.arr[0] = this.arr.pop();

      heapifyDown(this.arr, 0);

      return removed;
    }

    sort() {
      const count = this.arr.length;

      if (count === 0) return false;

      const sorted = [];

      for (let i = 0; i < count; i++) {
        sorted.push(this.delete());
      }

      return sorted;
    }
  }

  function heapifyUp(arr, idx) {
    const parentIdx = parseInt((idx - 1) / 2);

    if (arr[idx] <= arr[parentIdx]) return;

    const temp = arr[idx];

    arr[idx] = arr[parentIdx];
    arr[parentIdx] = temp;

    heapifyUp(arr, parentIdx);
  }

  function heapifyDown(arr, idx) {
    const count = arr.length;

    const leftIdx = 2 * idx + 1;
    const rightIdx = leftIdx + 1;

    const left = leftIdx >= count ? 0 : arr[leftIdx];

    if (left === 0) return;

    const right = rightIdx >= count ? 0 : arr[rightIdx];

    const largeIdx = left > right ? leftIdx : rightIdx;

    const temp = arr[idx];

    arr[idx] = arr[largeIdx];
    arr[largeIdx] = temp;

    heapifyDown(arr, largeIdx);
  }

  return Heap;
})();

const heap = new Heap();
heap.insert(5);
heap.insert(3);
heap.insert(4);
heap.insert(7);
heap.insert(2);
heap.delete();
console.log(heap.arr);
console.log(heap.sort());
