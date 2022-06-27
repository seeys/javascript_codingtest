function solution(graph, start) {
  let visited = [];
  let stack = [start];
  while (stack.length !== 0) {
    let n = stack.shift();
    if (!visited.includes(n)) {
      // 방문하지 않은 노드들
      visited.push(n); // 방문 표시
      console.log(n);
      let next = graph[n].filter((x) => !visited.includes(x));
      for (let i of next) {
        stack.push(i);
      }
    }
  }
  //console.log(visited);
}

const graph = {
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"],
};
solution(graph, "E");
