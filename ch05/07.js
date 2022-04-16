function solution(a, b) {
  let answer = "YES";
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  console.log(a, b);
  if (a === b) {
    return answer;
  } else {
    return "NO";
  }
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
