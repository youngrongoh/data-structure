const Tree = (function () {
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class Tree {
    constructor() {
      this.count = 0;
      this.root = null;
    }

    search(key) {
      return _search(this.root, key);
    }

    add(data) {
      this.root = _insert.bind(this)(this.root, data);
      return this.count;
    }

    remove(data) {
      this.root = _remove.bind(this)(this.root, data);
      return this.count;
    }
  }

  function _search(root, key) {
    if (!root) return false;
    if (key < root.data) {
      return _search(root.left, key);
    } else if (root.data < key) {
      return search(roo.right, key);
    } else {
      return true;
    }
  }

  function _insert(root, data) {
    if (!root) {
      this.count++;
      return new Node(data);
    }
    if (data < root.data) {
      root.left = _insert.bind(this)(root.left, data);
    } else if (root.data < data) {
      root.right = _insert.bind(this)(root.right, data);
    } else {
      throw new Error("Can't insert this data, because it is in the tree!");
    }
    return root;
  }

  function _remove(root, data) {
    if (!root) return null;
    if (data < root.data) {
      root.left = _remove.bind(this)(root.left, data);
    } else if (root.data < data) {
      root.right = _remove.bind(this)(root.right, data);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) return root.right;
      else if (!root.right) return root.left;
      else {
        let exchange = root.left;
        while (exchange.right) exchange = exchage.right;
        root.data = exchange.data;
        root.left = _remove(root.left, exchange.data);
      }
      this.count--;
    }
    return root;
  }

  return Tree;
})();

var tree = new Tree();
console.log(tree.root);
tree.add(5);
console.log(tree.root);
console.log(tree.count);
tree.add(3);
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(6);
console.log(tree.count);
console.log(tree.root);
tree.remove(3);
console.log(tree.root);
console.log(tree.count);
/* 
        5
      /  \
    1     6
      \     \
      3      7
    /  \      \     
  2     4      9
*/
