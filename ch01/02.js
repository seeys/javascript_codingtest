function solution(a, b, c) {
  let max = 0;
  let answer = "NO";
  if (a < b) {
    if (b < c) {
      max = c;
      if (max < a + b) answer = "YES";
    } else {
      max = b;
      if (max < a + c) answer = "YES";
    }
  } else {
    max = a;
    if (max < b + c) answer = "YES";
  }
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
