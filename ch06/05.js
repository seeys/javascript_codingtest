function solution(str) {
  let answer = 0;
  let s = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") s.push("(");
    else {
      s.pop();
      if (str[i - 1] === "(") answer += s.length;
      else answer++;
    }
  }
  return answer;
}

const str = "()(((()())(())()))(())";
const str1 = "(((()(()()))(())()))(()())";

console.log(solution(str1));
