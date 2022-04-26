function find_idx(n) {
  let keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [-1, 0, -1],
  ];
  let idx = [];
  for (let i = 0; i < keypad.length; i++) {
    for (let j = 0; j < keypad[0].length; j++) {
      if (keypad[i][j] === n) {
        idx.push(i);
        idx.push(j);
      }
    }
  }
  return idx;
}
function solution(numbers, hand) {
  let answer = [];
  let left = 0;
  let right = 0;
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] === 1 || numbers[x] === 4 || numbers[x] === 7) {
      answer.push("L");
      left = numbers[x];
    } else if (numbers[x] === 3 || numbers[x] === 6 || numbers[x] === 9) {
      answer.push("R");
      right = numbers[x];
    } else {
      // 2, 5, 8, 0
      let i = find_idx(numbers[x]);
      let le_idx = find_idx(left);
      let ri_idx = find_idx(right);
      let l_dis = Math.abs(i[0] - le_idx[0]) + Math.abs(i[1] - le_idx[1]);
      let r_dis = Math.abs(i[0] - ri_idx[0]) + Math.abs(i[0] - ri_idx[1]);
      if (l_dis < r_dis) {
        answer.push("L");
        left = numbers[x];
      } else if (l_dis > r_dis) {
        answer.push("R");
        right = numbers[x];
      } else {
        if (hand === "right") {
          answer.push("R");
          right = numbers[x];
        } else {
          answer.push("L");
          left = numbers[x];
        }
      }
    }
  }
  return answer;
}

const arr = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const arr1 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
console.log(solution(arr1, "right"));
