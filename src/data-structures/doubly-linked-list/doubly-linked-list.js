/**
 * Class representing Doubly linked list
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const nodeToPush = new Node(data);
    if (!this.head) {
      this.head = nodeToPush;
      this.tail = nodeToPush;
    } else {
      this.tail.next = nodeToPush;
      nodeToPush.prev = this.tail;
      this.tail = nodeToPush;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    const nodeToPop = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeToPop.prev;
      this.tail.next = null;
    }
    this.length--;
    return nodeToPop;
  }

  shift() {
    if (!this.head) return undefined;
    const nodeToShift = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const secondNode = this.head.next;
      this.head = secondNode;
      this.head.prev = null;
    }
    this.length--;
    return nodeToShift;
  }

  unshift(data) {
    const nodeToUnshift = new Node(data);
    if (!this.head) {
      this.head = nodeToUnshift;
      this.tail = this.head;
    } else {
      nodeToUnshift.next = this.head;
      this.head.prev = nodeToUnshift;
      this.head = nodeToUnshift;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    if (index <= this.length / 2) {
      let curNode = this.head;
      for (let i = 1; i < index; i++) {
        curNode = curNode.next;
      }
      return curNode;
    } else {
      let curNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        curNode = curNode.prev;
      }
      return curNode;
    }
  }

  set(index, data) {
    let nodeToSet = this.get(index);
    if (nodeToSet) {
      nodeToSet.data = data;
      return true;
    }
    return false;
  }

  insert(index, data) {
    if (index < 0 || index >= this.length) return false;
    const nodeToInsert = new Node(data);
    if (index === 0) return this.unshift(data);
    if (index === this.length - 1) return this.push(data);
    const nodePrevToIndex = this.get(index - 1);
    const nodeNextToIndex = nodePrevToIndex.next;
    nodeToInsert.next = nodeNextToIndex;
    nodeToInsert.prev = nodePrevToIndex;
    nodePrevToIndex.next = nodeToInsert;
    nodeNextToIndex.prev = nodeToInsert;
    this.length++;
    return true;
  }
}

module.exports = DoublyLinkedList;