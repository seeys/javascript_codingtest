function solution(str) {
  let arr = [];
  str.filter((v) => {
    if (!arr.includes(v)) arr.push(v);
  });
  return arr;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
