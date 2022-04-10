function solution(a, b, c) {
  let answer = a + b + c;
  let max;
  let res = "YES";
  if (a < b) {
    max = b;
  } else {
    max = a;
  }
  if (c > max) {
    max = c;
  }
  if (max >= answer - max) {
    res = "NO";
  }
  return res;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
