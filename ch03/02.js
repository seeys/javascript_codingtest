function solution(str) {
  str = str.toLowerCase();
  let answer = str.split(/[^a-z]/gi).join("");
  let res = answer.split("").reverse().join("");
  if (answer === res) {
    return "YES";
  } else {
    return "NO";
  }
}
function solution2(str) {
  let answer = "YES";
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  if (str.split("").reverse().join("") !== str) return "NO";
  return answer;
}
const str = "found7, time: sudy; Yduts; emit, 7Dnuof";
console.log(solution(str));
