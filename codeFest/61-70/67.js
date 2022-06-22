function solution(n) {
  let i = 1;
  let answer = [];
  while ((i * (i - 1)) / 2 < n) {
    i++;
  }
  console.log(i);
  answer.push(n - ((i - 1) * (i - 2)) / 2);
  answer.push(i);
  console.log(answer);
}

solution(59);
