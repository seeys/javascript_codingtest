function solution(graph, start, end) {
  let ch = [];
  let path = [];
  let re = Number.MIN_SAFE_INTEGER;
  const dfs = (v) => {
    if (v === end) {
      re = Math.max(re, path.length);
      console.log(path);
    } else {
      for (let nv of graph[v]) {
        if (!ch.includes(nv)) {
          path.push(nv);
          ch.push(nv);
          dfs(nv);
          ch.pop();
          path.pop();
        }
      }
    }
  };
  ch.push(start);
  path.push(start);
  dfs(start);

  console.log(re - 1);
}

const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};
solution(graph, 1, 7);
