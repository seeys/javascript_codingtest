function solution(a, b) {
  let answer = [];
  a.map((v) => answer.push(v));
  b.map((v) => answer.push(v));
  answer.sort((i, j) => i - j);
  return answer;
}

function solution2(a, b) {
  let answer = [];
  let n = a.length;
  let m = b.length;
  let p1 = 0,
    p2 = 0;
  while (p1 < n && p2 < m) {
    if (a[p1] <= b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }

  while (p1 < n) answer.push(a[p1++]);
  while (p2 < m) answer.push(b[p2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution2(a, b));
