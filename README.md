## 1 Write a function that counts string unique charectar

## Usage

```js
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

objectMethod("Bidy5utt22###tt5ttuuu");
//result={ '2': 2, '5': 2, b: 1, i: 1, d: 1, y: 1, u: 4, t: 6 }