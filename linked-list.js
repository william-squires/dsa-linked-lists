/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head =newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    //handle empty list
    if (!this.head) {
      throw Error("List is empty")
    }

    const val = this.tail.val;
    let currNode = this.head

    if (!currNode.next) { //handle 1 element list
      this.head = null;
      this.tail = null;
    }
    else { // handle list with more than 1 element
      while (currNode.next != this.tail) {
        currNode = currNode.next;
      }
      currNode.next = null;
      this.tail = currNode;
    }

    this.length -= 1;
    return val;

  }

  /** shift(): return & remove first item. */

  shift() {

    //handle empty list
    if (!this.head) {
      throw Error("List is empty")
    }

    const val = this.head.val;

    let currNode = this.head;

    if (!currNode.next) { //handle 1 element list
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = currNode.next;
    }

    this.length -= 1;
    return val;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (!this.head) {
      throw Error("List is empty")
    }

    if (idx < 0 || idx > this.length - 1) {
      throw Error("Index out of bounds");
    }

    let currNode = this.head;

    for(let i = 0; i < idx; i++) {
      currNode = currNode.next;
    }

    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (!this.head) {
      throw Error("List is empty")
    }

    if (idx < 0 || idx > this.length - 1) {
      throw Error("Index out of bounds");
    }

    let currNode = this.head;

    for(let i = 0; i < idx; i++) {
      currNode = currNode.next;
    }

    currNode.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx < 0 || idx > this.length) {
      throw Error("Index out of bounds");
    }

    if(idx == 0) {
      this.unshift(val)
    }
    else if (idx == this.length) {
      this.push(val)
    }
    else {
      const newNode = new Node(val);
      const currNode = this.head
      for(let i = 0; i < idx -1; i++) {
        currNode = currNode.next;
      }
      newNode.next = currNode.next;
      currNode.next = newNode;
      this.length += 1;
    }


  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length) {
      throw Error("Index out of bounds");
    }

    if(idx == 0) {
      return this.shift()
    }
    else if (idx == this.length) {
      return this.pop()
    }
    else {
      let currNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currNode = currNode.next;
      }
      const removedVal = currNode.next.val
      currNode.next = currNode.next.next
      this.length -= 1;
      return removedVal;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    let currNode = this.head;
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += currNode.val;
      currNode = currNode.next;
    }
    return sum;
  }
}

module.exports = LinkedList;
