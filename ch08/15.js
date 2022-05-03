function solution(n, k, arr, m) {
  let answer = 0;
  let visited = Array.from({ length: n }, () => 0);

  const DFS = (l, sum) => {
    if (l === k) {
      if (sum >= 6 && sum % 6 === 0) {
        answer++;
      }
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (!visited) {
          visited[i] = 1;
          DFS(l + 1, sum + arr[i]);
        }
      }
    }
  };

  DFS(0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
