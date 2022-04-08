function solution(x) {
  let answer = new Set();
  let res = "";
  for (let i of x) {
    answer.add(i);
  }
  for (let j of answer) {
    res += j;
  }
  return res;
}

const str = "ksekkset";
console.log(solution(str));
