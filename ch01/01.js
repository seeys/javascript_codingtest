function solution(a, b, c) {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer) {
    answer = c;
  }
  return answer;
}

console.log(solution(2, 5, 3));
console.log(solution(2, 5, 1));
console.log(solution(4, 5, 3));