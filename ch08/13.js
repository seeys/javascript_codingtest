function combi(n, r) {
  let memo = Array.from(Array(11), () => Array(11).fill(0));

  if (n === r || r === 0) return 1;
  if (memo[n][r] > 0) return memo[n][r];
  else return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
}

function solution(n, f) {
  let answer;
  let flag = 0;
  let checked = Array.from({ length: n + 1 }, () => 0);
  let key = Array.from({ length: n }, () => 0); // 1 3 3 1 개
  let value = Array.from({ length: n }, () => 0); // 1 2 3 4 or 1 3 2 4 같은 숫자 배열

  const DFS = (L, sum) => {
    if (flag) return;
    if (L === n && sum === f) {
      answer = value.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (checked[i] === 0) {
          checked[i] = 1;
          value[L] = i;
          DFS(L + 1, sum + key[L] * value[L]);
          checked[i] = 0;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    key[i] = combi(n - 1, i);
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
