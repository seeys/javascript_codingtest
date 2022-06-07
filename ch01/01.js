function solution(a, b, c) {
  // return Math.min(a, b, c);
  let answer = 0;
  if (a < b) {
    if (a < c) answer = a;
    else if (c < a) answer = c;
  } else {
    if (b < c) answer = b;
  }
  return answer;
}

console.log(solution(2, 5, 3));
console.log(solution(2, 5, 1));
console.log(solution(5, 2, 3));
