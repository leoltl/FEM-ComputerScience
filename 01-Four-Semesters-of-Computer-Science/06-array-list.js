class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value
    this.length = this.length + 1
  }

  pop(){
    const value = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length = this.length - 1
    return value
  }

  get(index) {
    return this.data[index]
  }

  delete(index) {
    const value = this.data[index]
    this._collapseTo(index)
    return value
  }

  _collapseTo(index) {
    let i = index
    while (i < this.length) {
      this.data[i] = this.data[i + 1]
      i++
    }
    delete this.data[this.length]
    this.length = this.length - 1
  }
}