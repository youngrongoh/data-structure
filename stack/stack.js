class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    return ++this.count;
  }

  pop() {
    if (!this.top) {
      throw new Error('Stack Underflow!');
    }
    const data = this.top.data;
    this.top = this.top.next;
    this.count--;
    return data;
  }

  stackTop() {
    if (!this.top) {
      return undefined;
    }
    return this.top.data;
  }
}

const stack = new Stack();
console.log(stack.stackTop());
stack.push('one');
stack.push('two');
stack.push('tree');
console.log(stack.stackTop());
console.log(stack.top);
stack.pop();
console.log(stack.count);
