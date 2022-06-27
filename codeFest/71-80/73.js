function solution(graph, start, end) {
  let ch = [];
  let path = [];
  let re = Number.MAX_SAFE_INTEGER;
  const dfs = (v) => {
    if (v === end) {
      re = Math.min(re, path.length);
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
  path.push("A");
  dfs(start);
  console.log(re - 1);
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
solution(graph, "A", "F");
