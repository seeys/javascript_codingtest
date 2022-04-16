function solution(str) {
  let answer = [];
  let alpha = ["A", "B", "C", "D", "E"];
  answer.push((str.match(/A/g) || []).length);
  answer.push((str.match(/B/g) || []).length);
  answer.push((str.match(/C/g) || []).length);
  answer.push((str.match(/D/g) || []).length);
  answer.push((str.match(/E/g) || []).length);
  let m_idx = answer.indexOf(Math.max(...answer));
  return alpha[m_idx];
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
