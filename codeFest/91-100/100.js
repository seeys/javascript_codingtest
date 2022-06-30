function solution(plate, moves) {
  let stack = [0];
  let point = 0;
  let len = plate.length;
  while (moves.length) {
    let m = moves.shift();
    for (let i = 0; i < len; i++) {
      if (plate[i][m - 1] !== 0) {
        if (stack[stack.length - 1] === plate[i][m - 1]) {
          point += plate[i][m - 1] * 2;
          plate[i][m - 1] = 0;
          stack.pop();
        } else {
          stack.push(plate[i][m - 1]);
        }
        plate[i][m - 1] = 0;
        break;
      } else {
        if (i === len - 1 && plate[i][m - 1] === 0) {
          point -= 1;
        }
      }
    }
  }
  return point;
}

const plate = [
  [0, 0, 0, 0],
  [0, 1, 0, 3],
  [2, 5, 0, 1],
  [2, 4, 4, 1],
  [5, 1, 1, 1],
];
const moves = [1, 1, 1, 1, 3, 3, 3];

console.log(solution(plate, moves));
