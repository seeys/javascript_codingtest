function solution(x) {
  let answer = new Set();
  let res = "";
  for (let i of x) {
    answer.add(i);
  }
  for (let j of answer) {
    res += j;
  }
  /*for (let i = 0; i < x.length; i++) {
    if (x.indexof(x[i] === i)) res+=s[i];
  }*/
  return res;
}

const str = "ksekkset";
console.log(solution(str));
