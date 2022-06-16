function solution(n, f) {
  let answer;
  let memo = Array.from({ length: 11 }, () => Array(11).fill(0));
  const comb = (x, y) => {
    if (x === y || y === 0) return 1;
    if (memo[x][y] > 0) return memo[x][y];
    else {
      return (memo[x][y] = comb(x - 1, y - 1) + comb(x - 1, y));
    }
  };
  // 1 3 3 1 조합을 저장할 배열
  let b = Array.from({ length: n }, () => 0);
  // 각 배열의 원소를 저장할 배열
  let p = Array.from({ length: n }, () => 0);
  // 방문 체크할 배열
  let ch = Array.from({ length: n + 1 }, () => 0);

  let flag = 0;
  const dfs = (l, sum) => {
    if (flag) return;
    if (l === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[l] = i;
          dfs(l + 1, sum + b[l] * p[l]);
          ch[i] = 0;
        }
      }
    }
  };

  // comb을 호출하여 조합수 b를 저장하자
  for (let i = 0; i < n; i++) {
    b[i] = comb(n - 1, i);
  }
  dfs(0, 0);
  return answer;
}

console.log(solution(4, 16));
