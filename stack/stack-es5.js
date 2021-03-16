var Stack = (function () {
  function Stack() {
    this.top = null;
    this.count = 0;
  }

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  Stack.prototype.push = function (data) {
    var node = new Node(data);
    node.next = this.top;
    this.top = node;
    return ++this.count;
  };

  Stack.prototype.pop = function () {
    // 스택이 비었을 때
    if (!this.top) {
      throw new Error('Stack Underflow!');
    }
    var data = this.top.data;
    this.top = this.top.next;
    this.count--;
    return data;
  };

  Stack.prototype.stackTop = function () {
    // 스택이 비었을 때
    if (!this.top) {
      return undefined;
    }
    return this.top.data;
  };
  return Stack;
})();

var stack = new Stack();
console.log(stack.stackTop());
stack.push('one');
stack.push('two');
stack.push('three');
console.log(stack.stackTop());
console.log(stack.top);
stack.pop();
console.log(stack.pop());
console.log(stack.count);
