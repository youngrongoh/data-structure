class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);
    let current = this.head;
    // 리스트가 비었을 때
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return ++this.length;
  }

  search(position) {
    let current = this.head;
    let count = 0;
    // 리스트가 비었을 때
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
  }

  remove(position) {
    let current = this.head;
    let before;
    let count = 0;
    // 리스트가 비었을 때
    if (!current) {
      throw new Error('Underflow Error!');
    }
    // 마지막 인덱스보다 큰 값이 입력되었을 때
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
  }
}

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
