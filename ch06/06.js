function solution(n, k) {
  let answer = 0;
  let q = Array.from({ length: n }, (_, i) => i + 1);
  while (q.length > 0) {
    for (let i = 1; i < k; i++) {
      q.push(q.shift());
    }
    q.shift();
    if (q.length === 1) answer = q.shift();
  }
  return answer;
}

console.log(solution(8, 3));
