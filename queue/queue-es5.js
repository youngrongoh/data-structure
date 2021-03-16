var Queue = (function () {
  function Queue() {
    this.count = 0;
    this.head = null;
    this.rear = null;
  }

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  Queue.prototype.enqueue = function (data) {
    var node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    return ++this.count;
  };

  Queue.prototype.dequeue = function () {
    if (!this.head) {
      throw new Error('This queue is empty!');
    }
    var remove = this.head.data;
    this.head = this.head.next;
    this.count--;
    return remove;
  };

  Queue.prototype.front = function () {
    return this.head.data;
  };

  return Queue;
})();

var queue = new Queue();
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
