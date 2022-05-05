function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let checked = Array.from({ length: n + 1 }, () => 0);
  for (let [x, y] of arr) {
    graph[x][y] = 1;
  }
  console.log(graph);

  const DFS = (v) => {
    if (v === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && checked[i] === 0) {
          // 그래프가 1이고 방문하지 않아야 탐색
          checked[i] = 1;
          DFS(i);
          checked[i] = 0;
        }
      }
    }
  };
  checked[1] = 1; // 1부터 시작해서 방문표시
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
