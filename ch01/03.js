function solution(a) {
  let answer = 0;
  let m = parseInt(a / 12);
  if (a % 12 === 0) {
    answer = m;
  } else {
    answer = m + 1;
  }
  return answer;
}

console.log(solution(25));
console.log(solution(178));
