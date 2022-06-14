function solution(need, plan) {
  let q = [];
  for (let x of plan) {
    if (need.includes(x)) {
      q.push(x);
    }
  }
  if (need === q.join("")) return "YES";
  else return "NO";
}
const str = "CBA";
const str1 = "CBDAGE";

console.log(solution(str, str1));
