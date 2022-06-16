function solution(n, m) {
  let answer = [];
  let num = Array.from({ length: m }, () => 0);

  const DFS = (l, s) => {
    if (l === m) {
      answer.push(num.slice());
      return;
    } else {
      for (let i = s; i <= n; i++) {
        num[l] = i;
        DFS(l + 1, i + 1);
      }
    }
  };
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
