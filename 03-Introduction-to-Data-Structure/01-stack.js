/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {}
    this._length = 0
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    // TODO: add typechecking and check arguments exist
    this._storage[this._length] = value
    this._length++
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    if (this.length <= 0) throw Error('No more item to pop on stack')
    const value = this._storage[this._length - 1]
    delete this._storage[this._length - 1]
    this._length--
    return value
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
 peek() {
    if (this.length <= 0) throw Error('No more item on stack')
    return this._storage[this._length - 1]
  }
}

const myStack = new Stack();

console.log(myStack)
// console.log(myStack.peek())
const arr = [1,2,3,4,5]
arr.forEach(i => myStack.push(i))
console.log(myStack)
console.log(myStack.pop())
console.log(myStack)
console.log(myStack.peek())
