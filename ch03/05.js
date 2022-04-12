function solution(str) {
  let answer = new Set();
  for (let x of str) {
    let idx = str.lastIndexOf(x) - str.indexOf(x) + 1;
    if (idx != 1) {
      answer.add(x);
      answer.add(idx);
    } else {
      answer.add(x);
    }
  }
  answer = [...answer];
  return answer.join("");
}

const str = "KKHSSSSSSSE";
console.log(solution(str));
