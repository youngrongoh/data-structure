class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
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
    return ++this.count;
  }

  dequeue() {
    if (!this.head) {
      throw new Error('Stack Underflow!');
    }
    const remove = this.head.data;
    this.head = this.head.next;
    return remove;
  }

  front() {
    return this.head.data;
  }
}

const queue = new Queue();
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
