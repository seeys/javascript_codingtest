function solution(board, range) {
  let n = board.length;
  let answer = Number.MIN_SAFE_INTEGER;
  const dfs = (i, j) => {
    let cnt = 0;
    for (let x = i; x < i + range; x++) {
      for (let y = j; y < j + range; y++) {
        if (board[x][y] === 1) cnt++;
      }
    }
    return cnt;
  };

  for (let i = 0; i <= n - range; i++) {
    for (let j = 0; j <= n - range; j++) {
      answer = Math.max(answer, dfs(i, j));
    }
  }

  return answer;
}

const board = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

console.log(solution(board, 3));
