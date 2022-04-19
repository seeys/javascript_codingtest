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

function solution2(n, a) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < a.length; rt++) {
    sum += a[rt];
    if (sum === n) answer++;
    while (sum >= n) {
      sum -= a[lt++];
      if (sum === n) {
        answer++;
      }
    }
  }
  return answer;
}
let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution2(6, a));
