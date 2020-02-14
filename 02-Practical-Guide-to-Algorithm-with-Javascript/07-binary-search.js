let binarySearch = (list, item, offset=0) => {
  let midIdx = Math.floor(list.length / 2)
  if (item === list[midIdx]) {
    return midIdx + offset
  } else if (list.length <= 1) {
    return false
  } else if (item < list[midIdx]) {
    return binarySearch(list.slice(0, midIdx), item, offset)
  } else {
    return binarySearch(list.slice(midIdx), item, midIdx + offset)
  }
}

console.log(binarySearch([2,6,7,90,103], 90))
console.log(binarySearch([2,6,7,90,103,105,107,200], 105))
console.log(binarySearch([2,6,7,90,103,105,107,200], 201))
console.log(binarySearch([2,6,7,90,103,105,107,200], NaN))

binarySearch = (list, item) => {
  let min = 0;
  let max = list.length -1
  let guess
  while( max >= min) {
    guess = Math.floor((min + max) / 2) 
    if (list[guess] === item) {
      return guess
    } else {
      if (list[guess] > item) {
        max = guess - 1
      } else {
        min = guess + 1
      }
    }
  }
  return false
}


console.log(binarySearch([2,6,7,90,103], 90))
console.log(binarySearch([2,6,7,90,103,105,107,200], 105))
console.log(binarySearch([2,6,7,90,103,105,107,200], 201))