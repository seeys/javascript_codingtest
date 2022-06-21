function solution(m, coin) {
  let dp = Array.from({ length: m + 1 }, (_, i) => i + 1);

  dp[0] = 0;
  dp[1] = coin[0];

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin[i]] + 1);
    }
  }
  console.log(dp);
  return dp[m];
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
