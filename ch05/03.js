function solution(m, a) {
  let answer = 0;
  let n = a.length;
  let i = (j = 0);
  let sum = 0;
  while (j < n) {
    sum += a[j++];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= a[i++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
