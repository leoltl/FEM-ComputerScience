class Tree {
  constructor() {
    this.root = null
  }

  toObject() {
    return this.root
  }

  add(value) {
    const node = new Node(value)
    if (!this.root) {
      this.root = node
      return 
    } 
    // if (value < this.root.value) {
    //   if (this.root.left) {
    //     this.root.left.add(node)
    //   } else {
    //     this.root.left = node
    //   }
    // } else {
    //   if (this.root.right) {
    //     this.root.right.add(node)
    //   } else {
    //     this.root.right = node
    //   }
    // }
    let traversor = this.root;
    while (true) {
      if (value < traversor.value) {
        if (traversor.left) {
          traversor = traversor.left
        } else {
          traversor.left = node
          break
        }
      } else {
        if (traversor.right) {
          traversor = traversor.right
        } else {
          traversor.right = node
          break
        }
      }
    }
  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value
    this.left = left
    this.right = right
  }
}