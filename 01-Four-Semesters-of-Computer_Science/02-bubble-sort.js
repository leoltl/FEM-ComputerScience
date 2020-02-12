function bubbleSort (arr) {
  function swap(a, b){
    const tmp = arr[b]
    arr[b] = arr[a]
    arr[a] = tmp
  }
  let swapped;
  do {
    swapped = false;
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] > arr[i+1]) {
        swap(i, i+1);
        swapped = true;
      }
    }
  } while (swapped);
  return arr
}

const arrToSort = [10, 5, 6, 1, 7, 2, 8]

console.log(bubbleSort(arrToSort));