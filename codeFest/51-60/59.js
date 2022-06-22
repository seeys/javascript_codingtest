function solution(str) {
  let n = str.length;
  let cnt = (50 - n) / 2 + 1;
  str = str.padStart(cnt, "=");
  str = str.padEnd(50, "=");
  console.log(str);
}

solution("hi");
