function solution(m, arr) {
  let answer = 0;
  let dp = Array.from({ length: m + 1 }, () => 0);
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];
    for (let j = m; j >= pt; j--) {
      dp[j] = Math.max(dp[j], dp[j - pt] + ps);
    }
  }
  answer = dp[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
