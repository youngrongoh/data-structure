var Tree = (function () {
  function Tree() {
    this.count = 0;
    this.root = null;
  }
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function _search(root, key) {
    if (!root) return false;
    if (key < root.data) {
      return _search(root.left, key);
    } else if (root.data < key) {
      return _search(root.right, key);
    } else {
      return true;
    }
  }

  Tree.prototype.search = function (key) {
    return _search(this.root, key);
  };

  function _insert(root, data) {
    if (!root) {
      this.count++;
      return new Node(data);
    }
    if (data < root.data) {
      root.left = _insert.bind(this)(root.left, data);
    } else {
      root.right = _insert.bind(this)(root.right, data);
    }
    return root;
  }

  Tree.prototype.add = function (data) {
    this.root = _insert.bind(this)(this.root, data);
    return this.count;
  };

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
        var exchange = root.left;
        while (exchange.right) exchange = exchange.right;
        root.data = exchange.data;
        root.left = _remove(root.left, exchange.data);
      }
      this.count--;
    }
    return root;
  }

  Tree.prototype.remove = function (data) {
    this.root = _remove.bind(this)(this.root, data);
    return this.count;
  };

  return Tree;
})();

var tree = new Tree();
console.log(tree.root);
tree.add(5);
console.log(tree.root);
tree.add(3);
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(6);
console.log(tree.root);
tree.remove(3);
console.log(tree.root);
/* 
        5
      /  \
    1     6
      \     \
      3      7
    /  \      \     
  2     4      9
*/
