class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    this.length++
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      let traverser = this.head
      while(traverser.next() != null) {
        traverser = traverser.next()
      }
      traverser.next = newNode
      this.tail = newNode
    }
  }

  pop() {
    this.length--
    let traverser = this.head
    while(traverser.next != null) {
      traverser = traverser.next
    }
    const value = traverser.value
    traverser.next = null
    return value
  }

  _find(value, test=this._test) {
    return
  }

  _test(a,b) {
    return a === b
  }

  testIndex(search, __, i) {
    return search === i
  }

  get(index) {
    if (index > this.length) return false;
    let i = 0
    let traverser = this.head
    while(i < index) {
      i++
      traverser = traverser.next()
    }
    return traverser
  }

  delete(index) {
    if (index > this.length) return false;
    let i = 0
    let traverser = this.head
    while(i < index) {
      i++
      traverser = traverser.next()
    }
    const value = traverser.value
    traverser.next = traverser.next().next() || null;
    return value
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
  next() {
    return this.next
  }
}