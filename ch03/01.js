function solution(str) {
  str = str.toUpperCase();
  let answer = str.split("").reverse().join("");
  let res = "YES";
  if (answer === str) {
    res = "YES";
  } else {
    res = "NO";
  }

  return res;
}
function solution2(str) {
  let answer = "YES";
  str = str.toLowerCase();
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return "NO";
  }
  return answer;
}
const str = "gooD";
console.log(solution(str));
