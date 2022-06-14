function solution(a, b) {
  let answer = [];
  let i = a.length;
  let j = b.length;
  let p1 = (p2 = 0);
  while (p1 < i && p2 < j) {
    if (a[p1] <= b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }
  while (p1 < i) answer.push(a[p1++]);
  while (p2 < j) answer.push(b[p2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
