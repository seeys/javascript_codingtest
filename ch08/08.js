function solution(n, m) {
  let answer = [];
  let num = Array.from({ length: m }, () => 0);

  const DFS = (l) => {
    if (l === m) {
      answer.push(num.slice());
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        num[l] = i;
        DFS(l + 1);
      }
    }
  };
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
