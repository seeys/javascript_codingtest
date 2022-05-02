function DFS(v) {
  if (v > 7) return;
  else {
    DFS(v * 2);
    DFS(v * 2 + 1);
    console.log(v);
  }
}

function solution(n) {
  DFS(n);
}

solution(1);
