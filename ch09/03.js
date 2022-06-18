function solution(board) {
  let answer = 0;
  let n = board.length;

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  const dfs = (i, j) => {
    if (i === n - 1 && j === n - 1) {
      answer++;
      return;
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          dfs(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  };
  board[0][0] = 1;
  dfs(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
