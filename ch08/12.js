function solution(n, r) {
  let memo = Array.from({ length: 34 }, () => Array(34).fill(0));
  let answer = 0;

  const dfs = (x, y) => {
    if (x === y || y === 0) return 1;
    if (memo[x][y] > 0) return memo[x][y];
    else {
      return (memo[x][y] = dfs(x - 1, y - 1) + dfs(x - 1, y));
    }
  };

  answer = dfs(n, r);
  return answer;
}

console.log(solution(33, 19));
