function solution(k, a) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = a.length;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += a[i];
  answer = sum;
  for (let i = k; i < n; i++) {
    sum = sum + a[i] - a[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
