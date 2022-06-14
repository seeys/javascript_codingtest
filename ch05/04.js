function solution(m, a) {
  let answer = 0;
  let n = a.length;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += a[rt];
    if (sum > m) {
      sum -= a[lt];
      lt++;
    }
    answer += rt - lt + 1;
  }
}
let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
