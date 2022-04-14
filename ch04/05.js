function solution(n, m, arr) {
  let sum_arr = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i !== j && j !== k && k !== i) {
          sum_arr.add(arr[i] + arr[j] + arr[k]);
        }
      }
    }
  }
  let res_arr = Array.from(sum_arr);
  res_arr.sort((a, b) => b - a);
  console.log(res_arr);
  return res_arr[m - 1];
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
