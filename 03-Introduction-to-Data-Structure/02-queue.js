/** Class representing a Queue. 
 * @constructor
*/

class Queue {

  constructor() {
    this._storage = {};
    this._startIndex = 0
    this._endIndex = 0
  }
  /*
  * Enqueues a new value at the end of the queue
  * @param {*} value the value to enqueue
  */
  enqueue(value) {
    if (value === undefined || value === null) throw Error('Cannot enqueue undefined or null')
    this._storage[this._endIndex] = value
    this._endIndex++
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    if (this._startIndex == this._endIndex) throw Error('No more item in queue')
    const value = this._storage[this._startIndex]
    delete this._storage[this._startIndex]
    this._startIndex++
    return value
  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} the first and oldest value in the queue
  */
  peek() {
    return this._storage[this._startIndex]
  }
}

const myQueue = new Queue();

console.log(myQueue)
const arr = [1,2,3,4,5]
arr.forEach(i => myQueue.enqueue(i))
console.log(myQueue)
console.log(myQueue.dequeue())
console.log(myQueue)
console.log(myQueue.peek())
console.log(myQueue)


console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue)
console.log(myQueue.dequeue())
myQueue.enqueue(2)
myQueue.enqueue(2)
console.log(myQueue.dequeue())
console.log(myQueue)