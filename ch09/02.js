function solution(n, arr) {
  let graph = Array.from(Array(n + 1), () => Array());
  for (let [x, y] of arr) {
    graph[x].push(y);
  }
  let ch = Array.from({ length: n + 1 }, () => 0);

  let cnt = 0;
  const dfs = (v) => {
    if (v === n) {
      cnt++;
      return;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (!ch[graph[v][i]]) {
          ch[graph[v][i]] = 1;
          dfs(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  };

  ch[1] = 1;
  dfs(1);
  return cnt;
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
