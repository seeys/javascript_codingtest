function solution(n) {
  const w = [3, 7];
  let dp = Array.from({ length: n + 1 }, () => 1000);

  dp[0] = 0;
  dp[3] = w[0];

  for (let i = 0; i < w.length; i++) {
    for (let j = w[i]; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - w[i]] + 1);
    }
  }
  console.log(dp);
  if (dp[n] !== 1000) console.log(dp[n]);
  else console.log(-1);
}

function solution1(n) {
  let answer = 0;
  while (true) {
    if (n % 7 === 0) {
      answer += parseInt(n / 7);
      console.log(answer);
      break;
    }

    n -= 3;
    answer += 1;
    if (n < 0) {
      console.log(-1);
      break;
    }
  }
}

solution(24);
