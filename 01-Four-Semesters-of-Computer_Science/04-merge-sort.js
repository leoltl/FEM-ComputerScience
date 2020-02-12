function mergeSort(nums) {
  if (nums.length <= 1) return nums
  let mid = Math.floor(nums.length / 2)
  const left = mergeSort(nums.slice(0, mid))
  const right = mergeSort(nums.slice(mid))
  return merge(left, right)
}

function merge(arr1, arr2) {
  let result = []
  while (arr1.length != 0 && arr2.length != 0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }
  result = result.concat(arr1, arr2)
  return result
}

const arrToSort = [10, 5, 6, 1, 7, 2, 8]

console.log(mergeSort(arrToSort))