const DoublyLinkedList = require('./doubly-linked-list');

describe('DoublyLinkedList', ()  => {
  let list;
  beforeEach(() => {
    list = new DoublyLinkedList();
  });
  test('push()', () => {
    list.push(13);
    expect(list.head.data).toBe(13);
  });

  test('pop()', () => {
    list.push(13);
    list.push(14);
    list.pop();
    expect(list.tail.data).toBe(13);
    expect(list.pop().data).toBe(13);
  });

  test('shift()', () => {
    list.push(13);
    list.push(14);
    list.shift();
    expect(list.head.data).toBe(14);
    expect(list.shift().data).toBe(14);
  });

  test('unShift()', () => {
    list.unshift(15);
    expect(list.head.data).toBe(15);
    list.unshift(16);
    console.log(list);
    expect(list.head.data).toBe(16);
  });

  test('get()', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    expect(list.get(4).data).toBe(5);
    expect(list.get(0).data).toBe(1);
    expect(list.get(5).data).toBe(6)
  });

  test('set()', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    expect(list.set(4, 44)).toBeTruthy();
  });

  test('insert()', () => {
    list.insert(0, 1);
    console.log(list);
    list.insert(1, 2);
    list.insert(2, 3);
    console.log(list);
    expect(list.tail.data).toBe(3);

  });
  test('remove()', () => {

  });
});