function solution(n, m) {
  let answer = [];
  let cnt = 0;
  let arr = Array.from({ length: m }, () => 0);

  const DFS = (v) => {
    if (v === m) {
      answer.push(arr.slice());
      cnt++;
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        arr[v] = i;
        DFS(v + 1);
      }
    }
  };
  DFS(0);
  answer.push(cnt);
  return answer;
}

console.log(solution(3, 2));
