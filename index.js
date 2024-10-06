//there are two ways of dynamic programming

//memoization
//tabulation

function fib(n) {
  if(n<=2)return 1
  return fib(n-1)+fib(n-2)
}

//memoization

//{ 0: 0, 1: 1, 2: 1 }
function fib(n, memo = {}) {
  if (memo[n]) return memo[n];

  if(n<=2) return 1

  let res = fib(n - 1, memo) + fib(n - 2, memo);

  console.log(memo);
  memo[n] = res;
  return res;
}

//tabulation //bottom -up approach

// function fib(n) {
//   if (n <= 2) return 1;

//   let arr = [0, 1, 1];

//   for (let i = 3; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   console.log(arr);
//   return arr[n];
// }

console.log(fib(100));


