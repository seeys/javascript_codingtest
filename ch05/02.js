function solution(a, b) {
  let answer = [];
  let n = a.length;
  let m = b.length;
  let i = 0;
  while (i++ < n) if (b.includes(a[i])) answer.push(a[i]);
  return answer.sort((x, y) => x - y);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8, 9];
console.log(solution(a, b));
