function solution(n, r) {
  let answer;

  const DFS = (x, y) => {
    if (x === y) return 1;
    if (y === 1) return x;
    else {
      return DFS(x - 1, y - 1) + DFS(x - 1, y);
    }
  };

  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
