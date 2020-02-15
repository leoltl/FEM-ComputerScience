/** Class representing a Hash Table */

class HashTable {
  constructor(size) {
    this._size = size
    this._storage = new Array(size);
  }
  /*
  * Inserts a new key-value pair
  * @param {string} key - the key associated with the value
  * @param {*} value - the value to insert
  */
  insert(kvPair) {
    const kv = Object.entries(kvPair)
    if (kv.length != 1) throw Error ('Only accept one key-value pair per insert')
    const [key, ..._] = kv[0]
    const hashedIndex = this._hash(key, this._size)
    if (!this._storage[hashedIndex]) this._storage[hashedIndex] = []
    this._storage[hashedIndex].push(kv[0])
  }
  /*
  * Deletes a key-value pair
  * @param {string} key - the key associated with the value
  * @return {*} value - the deleted value
  */
  remove(key) {
    if (key === undefined || key === null ) throw Error('Key is required when removing value')
    const hashedIndex = this._hash(key, this._size)
    const value = this._storage[hashedIndex]
    
    let hasDelete
    const filteredValue = value.filter(v => {
      if (v[0] === key) {
        hasDelete = true
        return false
      } else {
        return true
      }
    })
    if (!hasDelete) {
      throw Error('key not found')
    }
    this._storage[hashedIndex] = filteredValue.length == 0 ? undefined : filteredValue
  }
  /*
  * Returns the value associated with a key
  * @param {string} key - the key to search for
  * @return {*} - the value associated with the key
  */
  retrieve(key) {
    if (key === undefined || key === null ) throw Error('Key is required when retrieving value')
    const hashedIndex = this._hash(key, this._size)
    const value = this._storage[hashedIndex]
    const result = value.find(v => v[0] === key)
    if (result === undefined) {
      throw Error('key not found')
    }
    return result
  }  
  /*
  * Hashes string value into an integer that can be mapped to an array index
  * @param {string} str - the string to be hashed
  * @param {number} n - the size of the storage array
  * @return {number} - an integer between 0 and n
  */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++)
        sum += str.charCodeAt(i) * 3

    return sum % n;
  }
}

const myHash = new HashTable(2)

myHash.insert({a: 2})
myHash.insert({b: 2})
myHash.insert({c: 2})
console.log(myHash.retrieve('a'))
myHash.remove('b')
myHash.remove('c')
myHash.remove('a')

myHash.insert({c: 2})
myHash.insert({a: 2})