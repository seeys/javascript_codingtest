function DFS(v) {
  if (v > 7) return;
  else {
    DFS(v * 2);
    console.log(v);
    DFS(v * 2 + 1);
  }
}

function solution(n) {
  DFS(n);
}

solution(1);
