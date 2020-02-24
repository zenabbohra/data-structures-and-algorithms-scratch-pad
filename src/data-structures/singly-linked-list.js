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
    let newNode = new Node(val);
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
    if(!this.head) return undefined;
    let node = this.head;
    while (this.tail.next !== null){
      node = node.next;
    }

    return node;
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
    if (index < 0 || index >= list.length) return undefined;
    let nextNode = this.head;
    for (let i = 0; i < index; i++) {
      nextNode = nextNode.next;
    }
    return nextNode;
  }

}

let list = new SinglyLinkedList();
list.push('HELLO');
list.push('BYE');
list.push('HI AGAIN');
console.log('The list is : ', list);
let output = list.get(0);
console.log('get output is :', output);