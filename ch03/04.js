function solution(str, x) {
  let answer = [];
  let x_idx = [];
  // 문자 x의 인덱스 저장
  for (let i = 0; i < str.length; i++) {
    if (str[i] === x) {
      x_idx.push(i);
    }
  }
  for (let i of str) {
    let min_v = [];
    for (let j of x_idx) {
      min_v.push(Math.abs(str.indexOf(i) - j));
    }
    answer.push(Math.min(...min_v));
  }
  return answer;
}

const str = "teachermode";
console.log(solution(str, "e"));
