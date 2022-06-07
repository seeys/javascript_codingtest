function solution2(str, t) {
  let t_idx = [];
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) t_idx.push(i);
  }
  for (let i = 0; i < str.length; i++) {
    let tmp = t_idx.map((v) => Math.abs(i - v));
    answer.push(Math.min(...tmp));
    tmp = [];
  }
  console.log(t_idx);
  return answer;
}
const str = "teachermode";
console.log(solution2("teachermode", "e"));
