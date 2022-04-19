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
function solution2(str) {
  let sh = new Map();
  let answer;
  for (let x of str) {
    if (!sh.has(x)) {
      sh.set(x, 1);
    } else {
      sh.set(x, sh.get(x) + 1);
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sh) {
    if (max < val) {
      max = val;
      answer = key;
    }
  }
  return answer;
}
let str = "BACBACCACCBDEDE";
console.log(solution2(str));
