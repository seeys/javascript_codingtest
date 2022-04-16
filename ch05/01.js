function solution(a, b) {
  let answer = [];
  a.map((v) => answer.push(v));
  b.map((v) => answer.push(v));
  answer.sort((i, j) => i - j);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
