function solution(board, moves) {
  let n = board.length;
  moves = moves.map((v) => v - 1);
  let s = [];
  let answer = 0;
  for (let j of moves) {
    for (let i = 0; i < n; i++) {
      if (board[i][j] !== 0) {
        if (s[s.length - 1] === board[i][j]) {
          s.pop();
          answer += 2;
        } else s.push(board[i][j]);
        board[i][j] = 0;

        break;
      }
    }
  }
  console.log(s);
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
