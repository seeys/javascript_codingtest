function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let checked = Array.from({ length: n + 1 }, () => 0);
  for (let [x, y] of arr) {
    graph[x].push(y);
  }
  console.log(graph);

  const DFS = (v) => {
    if (v === n) {
      answer++;
    } else {
      for (let nv of graph[v]) {
        if (checked[nv] === 0) {
          checked[nv] = 1;
          DFS(nv);
          checked[nv] = 0;
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
