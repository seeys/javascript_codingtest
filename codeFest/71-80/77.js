function solution(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  let max = Math.max(n, m);
  let memo = Array.from(Array(max + 1), () => Array(max + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) memo[i][j] = memo[i - 1][j - 1] + 1;
      else memo[i][j] = 0;
    }
  }
  console.log(memo);
  return Math.max(...memo.flat());
}

const str1 = "THISISSTRINGS";
const str2 = "KIOTHIKESSISKKQQAEW";
console.log(solution(str1, str2));
