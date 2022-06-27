function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let x = String(i);
    if (!/[1245780]/g.test(x)) answer++;
  }
  return answer;
}

console.log(solution(93));
