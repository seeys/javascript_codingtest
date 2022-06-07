function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(
      max,
      arr[i].reduce((acc, val) => acc + val, 0)
    );
    sum += arr[i][i]; // 대각선
    sum2 += arr[n - 1 - i][i]; //반대 대각선
  }
  max = Math.max(max, sum, sum2);

  for (let i = 0; i < n; i++) {
    let sum3 = 0;
    for (let j = 0; j < n; j++) {
      sum3 += arr[j][i];
    }
    max = Math.max(max, sum3);
  }
  return max;
}
let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
