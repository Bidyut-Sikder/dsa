//merge sort

function merge(arr1, arr2) {
  let result = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1.length > arr1Index && arr2.length > arr2Index) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      result.push(arr1[arr1Index]);
    }
  }
}

console.log(merge([3, 2, 12, 3], [6, 4, 5, 4, 3]));
