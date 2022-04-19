function solution(n, a) {
  let answer = 0;
  let len = a.length;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < len; rt++) {
    sum += a[rt];
    while (sum > n) {
      sum -= a[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}
let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
