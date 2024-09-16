function merge(arr1, arr2) {
  let result = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1.length > arr1Index && arr2.length > arr2Index) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
  }

  while (arr1.length > arr1Index) {
    result.push(arr1[arr1Index]);
    arr1Index++;
  }
  while (arr2.length > arr2Index) {
    result.push(arr2[arr2Index]);
    arr2Index++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let leftSide = mergeSort(arr.slice(0, middle));
  let rightSide = mergeSort(arr.slice(middle));

  return merge(leftSide, rightSide);
}

console.log(mergeSort([3, 2, 3, 3, 242, 54, 343, 43, 55]));
