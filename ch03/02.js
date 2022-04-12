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

const str = "found7, time: sudy; Yduts; emit, 7Dnuof";
console.log(solution(str));
