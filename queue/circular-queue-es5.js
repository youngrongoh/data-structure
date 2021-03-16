var CircularQueue = (function () {
  function CircularQueue() {
    this.count = 0;
    this.head = null;
    this.rear = null;
  }
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  CircularQueue.prototype.enqueue = function (data) {
    var node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.rear.next = this.head;
    return ++this.count;
  };

  CircularQueue.prototype.dequeue = function () {
    if (!this.head) {
      throw new Error('Stack Underflow!');
    }
    var remove = this.head.data;
    if (this.head === this.rear) {
      this.head = null;
      this.rear = null;
    } else {
      this.head = this.head.next;
      this.rear.next = this.head;
    }
    this.count--;
    return remove;
  };

  CircularQueue.prototype.front = function () {
    return this.head.data;
  };

  return CircularQueue;
})();

var queue = new CircularQueue();
console.log(queue.count);
queue.enqueue('one');
queue.enqueue('two');
console.log(queue.front());
queue.enqueue('three');
console.log(queue.count);
console.log(queue.head);
console.log(queue.rear);
queue.dequeue();
console.log(queue.count);
console.log(queue.head);
console.log(queue.rear);
