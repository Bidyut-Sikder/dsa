//! radix sort

function getIndexValueFromRight(num, place) {
  return Math.floor(Math.abs(num / Math.pow(10, place))) % 10;
}

function digitCounter(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function arrayElementsDigitCounter(arr) {
  let longerDigitsCount = 0;
  for (let i = 0; i < arr.length; i++) {
    longerDigitsCount = Math.max(longerDigitsCount, digitCounter(arr[i]));
  }
  return longerDigitsCount;
}

function RadixSort(arr) {
  let maxDigits = arrayElementsDigitCounter(arr);
  for (let i = 0; i < maxDigits; i++) {
    const buckts = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      buckts[getIndexValueFromRight(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...buckts);
  }
  return arr;
}

console.log(RadixSort([32, 3, 844, 122, 1033, 299, 11, 239, 2, 33, 283, 2352]));
