function solution(n) {
  if (n === 0) return;
  else {
    solution(n - 1);
    console.log(n);
  }
}

function solution2(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

solution(3);
