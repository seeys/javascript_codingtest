function solution(a, b) {
  let answer = [];
  for (let x of a) {
    if (b.includes(x)) {
      answer.push(x);
    }
  }
  answer.sort((i, j) => i - j);

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
