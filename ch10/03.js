function solution(arr) {
  let n = arr.length;
  let dp = Array.from({ length: n }, () => 0);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dp[j] > max) max = dp[j];
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
}

let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(arr));
