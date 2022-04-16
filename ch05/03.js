function solution(n, a) {
  let answer = 0;
  let len = a.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += a[j];
      if (sum === n) {
        answer++;
        break;
      }
    }
  }
  return answer;
}
let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
