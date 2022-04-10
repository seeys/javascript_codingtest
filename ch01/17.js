function solution(x) {
  let answer = new Set();
  for (let i of x) {
    answer.add(i);
  }
  for (let j of answer) {
    console.log(j);
  }
  /*let res = x.filter((v, i) => {
    return x.indexOf(v) === i;
  });*/
}

let str = ["good", "time", "good", "time", "student"];
solution(str);
