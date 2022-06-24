function solution(graph) {
  let visited = Array.from({ length: graph.length }, () => 0);

  const dfs = (l, v) => {};
}

const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};
solution(graph);
