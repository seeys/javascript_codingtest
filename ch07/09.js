function solution(arr) {
  let answer = 0;
  let tmp = Array.from({ length: 73 }, () => 0);
  for (let x of arr) {
    for (let i = x[0]; i < x[1]; i++) {
      tmp[i] += 1;
    }
  }
  answer = Math.max(...tmp);
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
