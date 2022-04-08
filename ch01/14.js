function solution(x) {
  let answer = -1;
  let res;
  let len = x.length;
  for (let i of x) {
    if (i.length > answer) {
      answer = i.length;
      res = i;
    }
  }
  return res;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
