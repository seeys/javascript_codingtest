function solution(n, r) {
  let answer;
  let memo = Array.from(Array(35), () => Array(35).fill(0));

  const DFS = (x, y) => {
    if (x === y || y === 0) return 1;
    if (memo[x][y] > 0) return memo[x][y];
    else return (memo[x][y] = DFS(x - 1, y - 1) + DFS(x - 1, y));
  };

  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
