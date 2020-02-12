function quickSort(nums) {
  const len = nums.length
  if (len <= 1) return nums
  const pivot = nums[len - 1]
  const smaller = []
  const larger = []
  for (let i = 0; i < len - 1 ; i++) {
    if (nums[i] < pivot) {
      smaller.push(nums[i])
    } else {
      larger.push(nums[i])
    }
  }
  return [...quickSort(smaller), pivot, ...quickSort(larger)]
}


const arrToSort = [10, 5, 6, 1, 7, 2, 8]

console.log(quickSort(arrToSort))