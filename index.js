function pivot(arr, start, end) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivot = arr[start];
  let startIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      startIndex++;
      swap(arr, startIndex, i);
    }
  }

  swap(arr, start, startIndex);

  return startIndex;
}
//console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3, 434, 23, 32, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left > right) {
    return arr;
  }

  let pivotIndex = pivot(arr, left);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);

  return arr;
}

//console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3, 434, 23, 32, 3]));
