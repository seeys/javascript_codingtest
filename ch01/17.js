function solution(x) {
  let answer = new Set();
  let len = x.length;
  for (let i of x) {
    answer.add(i);
  }
  for (let j of answer) {
    console.log(j);
  }
}

let str = ["good", "time", "good", "time", "student"];
solution(str);
