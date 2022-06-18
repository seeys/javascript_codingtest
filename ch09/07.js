// 섬나라 bfs
function solution(board) {
  let answer = 0;
  let n = board[0].length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  let q = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j]) {
        answer++;
        board[i][j] = 0;
        q.push([i, j]);
        while (q.length) {
          let x = q.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x[0] + dx[k];
            let ny = x[1] + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny]) {
              board[nx][ny] = 0;
              q.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
