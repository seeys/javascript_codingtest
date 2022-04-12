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

const str = "gooD";
console.log(solution(str));
