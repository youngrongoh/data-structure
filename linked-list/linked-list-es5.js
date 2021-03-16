var LinkedList = (function () {
  function LinkedList() {
    this.length = 0;
    this.head = null;
  }

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  LinkedList.prototype.add = function (value) {
    var node = new Node(value);
    var current = this.head;
    // 빈 리스트일 때
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return ++this.length;
  };

  LinkedList.prototype.search = function (position) {
    var current = this.head;
    var count = 0;
    // 빈 리스트 일 때
    if (!current) {
      return undefined;
    }
    // 마지막 인덱스보다 큰 값이 입력 되었을 때
    if (position > this.length - 1) {
      return undefined;
    }
    while (count < position) {
      current = current.next;
      count++;
    }
    return current.data;
  };

  LinkedList.prototype.remove = function (position) {
    var current = this.head;
    var before;
    var count = 0;
    // 빈 리스트일 때
    if (!current) {
      throw new Error('Underflow Error!');
    }
    // 마지막 인덱스보다 큰 값이 입력될 때
    if (position > this.length - 1) {
      return undefined;
    }
    if (position === 0) {
      this.head = current.next;
    } else {
      while (count < position) {
        before = current;
        current = current.next;
        count++;
      }
      before.next = current.next;
    }
    this.length--;
    return current.data;
  };

  return LinkedList;
})();

var list = new LinkedList();
console.log(list.search(2));
list.add('one');
console.log(list.search(2));
console.log(list.remove(1));
list.add('two');
list.add('three');
console.log(list.search(1));
list.remove(1);
console.log(list.head);
