function solution(map) {
  let row = map[0].length;
  let col = map.length;
  let board = Array.from(Array(row), () => new Array(col).fill(0));

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (map[i][j] === 0) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }
  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      if (board[i][j] === 1) {
        let min;
        if (board[i - 1][j] > board[i][j - 1]) min = board[i][j - 1];
        else if (board[i - 1][j - 1] > board[i - 1][j]) min = board[i - 1][j];
        else min = board[i - 1][j - 1];
        board[i][j] = min + 1;
      }
    }
  }

  let max = 0;
  let x = 0;
  let y = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (max < board[i][j]) {
        max = board[i][j];
        x = i;
        y = j;
      }
    }
  }
  console.log(max);
  for (let i = x - (max - 1); i < x + 1; i++) {
    for (let j = y - (max - 1); j < y + 1; j++) {
      board[i][j] = "#";
    }
  }
  return board;
}

const map = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
];

console.log(solution(map));
