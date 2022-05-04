function solution(n, m) {
  let answer = [];
  let res = Array.from({ length: m }, () => 0);
  const DFS = (L, s) => {
    if (L === m) {
      answer.push(res.slice());
    } else {
      for (let i = s; i <= n; i++) {
        res[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  };
  DFS(0, 1);

  return answer;
}

console.log(solution(4, 2));
