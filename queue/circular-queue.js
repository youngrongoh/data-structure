class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularQueue {
  constructor() {
    this.count = 0;
    this.head = null;
    this.rear = null;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.rear.next = this.head;
    return ++this.count;
  }

  dequeue() {
    if (!this.head) {
      throw new Error('Stack Underflow');
    }
    const remove = this.head.data;
    if (this.head === this.rear) {
      this.head = null;
      this.rear = null;
    } else {
      this.head = this.head.next;
      this.rear.next = this.head;
    }
    this.count--;
    return remove;
  }

  front() {
    return this.head.data;
  }
}

const queue = new CircularQueue();
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
