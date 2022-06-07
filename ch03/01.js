function solution(str) {
  let rev = str.toUpperCase().split("").reverse().join("");
  return rev === str.toUpperCase() ? "YES" : "NO";
}

const str = "gooG";
console.log(solution(str));
