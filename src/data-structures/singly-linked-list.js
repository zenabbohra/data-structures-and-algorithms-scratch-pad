class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) { // Adding node at the end of the list
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() { // Removing node at the end of the list
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift() { // Removing node from the beginning of the list
    if (!this.head) return undefined;
    else {
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      return currentHead;
    }
  }

  unshift(val) { //Adding node at the beginning of the list
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) { // getting node by index
    if (index < 0 || index >= this.length) return 'Invalid index provided';
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  set(val, index) { // updates the node at a specific index
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  toArray() {
    let arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    return arr;
  }

  insert(val, index) { // inserts a new node at a specific index
    /**
     * if the index is less than 0 or greater than length of list, return false
     * if the index is same as the length, insert at the end by the prev
     * otherwise, go to the index and point new node to current node at the index
     * Set the previous node pointer to new node
     * return true
     */
    const nodeToInsert = new Node(val);
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) { // you can use push() method here
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    const prev = this.get(index - 1);
    nodeToInsert.next = prev.next;
    prev.next = nodeToInsert;
    this.length++;
    return true;
  }
}

// let list = new SinglyLinkedList();
// list.push('HELLO');
// list.push('BYE');
// list.push('HI AGAIN');
// console.log('The list is : ', list.toArray());
// let output = list.get(2);
// console.log('get output is :', output);
// console.log('The list is : ', list);

module.exports = SinglyLinkedList;