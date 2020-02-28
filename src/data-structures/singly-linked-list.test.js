const SinglyLinkedList = require('./singly-linked-list');

// beforeAll(() => {
//   let list = new SinglyLinkedList();
// });

describe('singly linked list', () => {
  it('should push item', () => {
    let list = new SinglyLinkedList();
    list.push('first');
    list.push('second');
    expect(list.toArray()).toEqual(['first', 'second']);
  });

  it('should pop a node at the end of the list', () => {
    let list = new SinglyLinkedList();
    list.push('first');
    list.push('second');
    list.pop();
    expect(list.toArray()).toEqual(['first']);
  });


  it('should insert an item in the middle', () => {
    let list = new SinglyLinkedList();
    list.push('first');
    list.push('second');
    list.insert('third', 1);
    expect(list.toArray()).toEqual(['first', 'third', 'second']);
  })
});
