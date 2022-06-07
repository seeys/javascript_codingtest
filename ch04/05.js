function solution(n, k, arr) {
  let sum = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i !== j && j !== k && i !== k) {
          sum.add(arr[i] + arr[j] + arr[k]);
        }
      }
    }
  }
  sum = Array.from(sum);
  sum.sort((a, b) => b - a);
  console.log(sum);
  return sum[k - 1];
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
