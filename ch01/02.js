function solution(a, b, c) {
  let answer = 0;
  let max;
  let res;
  if (a < b) {
    max = b;
    answer = a + c;
  } else {
    max = a;
    answer = b + c;
  }
  if (c > max) {
    max = c;
    answer = a + b;
  }
  if (max < answer) {
    res = "YES";
  } else {
    res = "NO";
  }
  return res;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
