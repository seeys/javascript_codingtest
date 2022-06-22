function solution(top, rule) {
  let answer = [];
  for (let x of top) {
    answer.push(check(x, rule));
  }

  console.log(answer);
}
const check = (v, rule) => {
  let tmp = rule.indexOf(rule[0]);
  for (let c of v) {
    if (rule.includes(c)) {
      if (tmp > rule.indexOf(c)) return "불가능";
      tmp = rule.indexOf(c);
    }
  }
  return "가능";
};

const top = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";
solution(top, rule);
