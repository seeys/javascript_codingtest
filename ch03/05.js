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

function solution2(str) {
  let answer = "";
  str += " ";
  let cnt = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      answer += str[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}
const str = "KKHSSSSSSSE";
console.log(solution2(str));
