function linearSearch(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i
    }
  }
  return false
}

console.log(linearSearch([2,6,7,90,103], 90))