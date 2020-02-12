function insertionSort(arr) {
  if (arr.length <= 1) return arr
  let i = 1
  while (i < arr.length) {
    let key = arr[i]
    let j = i-1
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key
    i++
  }
  return arr
}

// solution with js utils function
function insertionSort2(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i,1)
        nums.splice(j, 0, spliced[0])
      }
    }
  }
  return nums
}

const arrToSort = [10, 5, 6, 1, 7, 2, 8]

console.log(insertionSort(arrToSort))
console.log(insertionSort2(arrToSort))