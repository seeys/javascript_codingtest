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
function solution2(a, b) {
  let answer = [];
  let n = a.length;
  let m = b.length;
  let p1 = 0;
  let p2 = 0;
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  while (p1 < n && p2 < m) {
    if (a[p1] < b[p2]) {
      p1++;
    } else if (b[p2] < a[p1]) {
      p2++;
    } else {
      answer.push(a[p1++]);
      p2++;
    }
  }
  return answer;
}
let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution2(a, b));
