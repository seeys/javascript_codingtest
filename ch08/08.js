function solution(n, m) {
  let answer = [];
  let cnt = 0;
  let arr = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      answer.push(arr.slice());
      cnt++;
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        arr[L] = i;
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  answer.push(cnt);
  return answer;
}

console.log(solution(3, 2));
