//write a function that counts string unique charectar

// function objectMethod(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();

//     //console.log(result[char] > 0);

//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   console.log(result);
// }

function objectMethod(str) {
  let result = {};
  for (var char of str) {
    char = char.toLowerCase();

    if (alphpNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  console.log(result);
}

function alphpNumeric(char) {
  return (
    (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) ||
    (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
    (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
  );
}

//  objectMethod("Bidy5utt22###tt5ttuuu");
//result={ '2': 2, '5': 2, b: 1, i: 1, d: 1, y: 1, u: 4, t: 6 }

///////////////////
//write a function that takes in two arrs and the second arr contains 1st elements sqare;
//return the first arr with the second arr elements in the same order

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

const dd = same([1, 2, 3], [9, 9, 1]);

//console.log(dd);

// const food = ['pizza', 'cake', 'salad', 'cookie'];

// const sp=food.splice(2,1)
// const s= food.slice(1)

// console.log(s)
// console.log(food)

/////////////////////// different approach

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const key of arr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    //console.log(key**2);

    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
  }

  console.log(frequencyCounter1);
  // console.log(frequencyCounter2);

  return true;
}

//console.log(same2([1, 2, 3], [4, 9, 1]));

//forin is ideal for objects
//forof is ideal for arrys

////////////////// anagram solutions/it means it takes two strings both contain same charactars.

function anaGram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let anaObj = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];

    anaObj[letter] ? anaObj[letter]++ : (anaObj[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    //  anaObj[letter] ? anaObj[letter]-- : false;

    if (anaObj[letter]) {
      anaObj[letter]--;
    } else {
      return false;
    }
    //console.log( anaObj[letter]);
  }

  // console.log(anaObj);

  return true;
}
// anaGram("bidyutt", "yutbidt");
// console.log(anaGram("bidyutt", "yuttbid"));

//////////////////////write a function that takes a sorted array and (-3,3) returns 0

// function multiplePointers(arr) {

//   for (let i = 0; i < arr.length; i++) {

//     for (let j = 1 + i; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

function multiplePointers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    console.log(left + right);

    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if ((arr[left] + arr[right] === 0) > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(multiplePointers([-4, -3, -2, -1, 0, 1, 2, 3, 4]));

/////////////////////////////////
//count unique values from a sorted array

function countUniqueValues(arr) {
  // console.log(arr);

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(arr[j]);
  }
  return i + 1;
}

//console.log(countUniqueValues([1, 2, 2, 5, 7,7, 99]));
// countUniqueValues([1, 2, 3, 3, 4, 5, 5, 6, 6]);

////////////////Sliding window Pattern///

//a function that takes an array and a number called n and returns the
// calculated maximum sum of
// n consecutive elements in the array

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = 0,
    tem = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  tem = max;
  for (let i = num; i < arr.length; i++) {
    tem = tem + arr[i] - arr[i - num];
    max = Math.max(tem, max);
  }

  console.log(max);
}
//maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);

//////////////////////////Divide and conquer pattern////
//a function takes in a sorted array and a number and returns
//the index where the value passed to the function is located;if the
//value is not found,returns -1

//console.log(a.indexOf(11));

// function indexCalculator(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     //console.log(arr[i]);

//     if (arr[i] == val) {
//       return i;
//     }
//   }
//   return -1;
// }

//binary search///////////////////////

function indexCalculator(arr, val) {
  let maxIn = arr.length - 1;
  let minIn = 0;

  do {
    let midIn = Math.floor((maxIn + minIn) / 2);
    let midVal = arr[midIn];

    if (midVal > val) {
      maxIn = midIn - 1;
    } else if (midVal < val) {
      minIn = midIn + 1;
    } else {
      return midIn;
    }
  } while (minIn <= maxIn);
}

//console.log(indexCalculator([1, 2, 3, 4, 5,5, 6, 7, 8], 6));

//////////////////////////////////////////////////////
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
// function sameFrequency(num1, num2) {
//   //anagram ( log n)
//   if (num1.length !== num2.length) return false;

//   let frequencyObj = {};
//   for (let i = 0; i < num1.length; i++) {

//     if (frequencyObj[num1[i]]) {
//       frequencyObj[num1[i]]++;
//     } else {
//       frequencyObj[num1[i]] = 1;
//     }
//   }
//   for (let i = 0; i < num2.length; i++) {

//     if (frequencyObj[num2[i]]) {
//       frequencyObj[num2[i]]--;
//     } else {
//      return false
//     }
//   }
//   //console.log(frequencyObj);
//   return true
// }

//  console.log(sameFrequency("bbc", "cbb"));//true

////////////////////////////////////////////////////////////////////////
//checking duplicate values in an object
/////////////////////////////////

function areThereDuplicates(obj) {
  //checking duplicate values in an object

  let collecion = {};
  for (const key in obj) {
    collecion[obj[key]] = (collecion[obj[key]] || 0) + 1;
  }

  for (const key in collecion) {
    if (collecion[key] > 1) return true;
  }
}

// console.log(
//   areThereDuplicates({
//     gg: "arno",
//     c: "bidyut",
//     b: "tonmoy",
//     h: "arno",
//     f: "arno",
//     a: "bidyut",
//   })
// );
//////////////////////////////////////////////
// Implement a function called, areThereDuplicates which accepts
//  a variable number of arguments, and checks whether there are any
//  duplicates among the arguments passed in.
//////////////////////////////////////////

function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 1;
  });

  let start = 0,
    next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) return true;

    start++;
    next++;
  }

  return false;
}

//console.log(areThereDuplicates("arno", "bidyut", "tonmoy", "arno"));// true

/////////////////////////////////////////////////
//console.log(areThereDuplicates(1,2,3,4,5,1)); /////////////////////////////////////////////////

/////////////////////////////////////////////////
function areThereDuplicates() {
  let uniqueValueLength = new Set(arguments).size;

  return uniqueValueLength !== arguments.length;
}

//console.log(areThereDuplicates("arno", "bidyut", "tonmoy ")); /////////////////////////////////////////////////
////////////////////////////////////

// Given a sorted array of integers and a target average,
//  determine if there is a pair of values in the array where
//   the average of the pair equals the target average. There may be more
// than one pair that matches the average target.

/////////////////////////////////

function averagePair(arr, aver) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    // console.log(avg);

    if (avg === aver) {
      console.log([arr[start], arr[end]]);
      start++;
    } else if (avg < aver) {
      start++;
    } else if (avg > aver) {
      end--;
    }
  }
  return false;
}

//console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 13, 19], 9));

///////////////////////////////////////////////////////////////////////
// Write a function called isSubsequence which takes
// in two strings and checks whether the characters in
// the first string form a subsequence of the characters in the
// second string. In other words, the function should check whether
//  the characters in the first string appear
//  somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  let i = 0,
    j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) {
      console.log(i, str1.length);

      return true;
    }

    j++;
  }

  return false;
}

// console.log(isSubsequence('abc', 'ahbgdc'));

//console.log(isSubsequence("bid", "byutsikder"));

////////////////////////////////////////////////
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of
//a contiguous subarray of which the sum is greater than
// or equal to the integer passed to the function. If there isn't one, return 0 instead.

///;

function minSubArrayLen(arr, sum) {
  let minLength = Infinity;
  let start = 0;
  let end = 0;
  let total = 0;

  while (start < arr.length) {
    if (start < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLength = Math.min(minLength, end - start);
      console.log(minLength, end - start);

      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

//console.log(minSubArrayLen([2, 3, 2, 2, 3], 6));

//////////////////////////////////////////////////////////////
// Write a function called findLongestSubstring,
//  which accepts a string and returns the length of the longest
// substring with all distinct characters.

function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let keep = {};
  for (let i = 0; i < str.length; i++) {
    if (keep[str[i]]) {
      start = Math.max(start, keep[str[i]]);
    }
    longest = Math.max(longest, i + 1 - start);

    keep[str[i]] = i + 1;
  }
  return longest;
}

//console.log(findLongestSubstring("thecatinthehat"));
