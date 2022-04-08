function solution(x) {
  let answer = "";
  for (let i of str) {
    if (/[A-Z\W]/.test(i)) {
      answer += i.toLowerCase();
    } else {
      answer += i.toUpperCase();
    }
  }
  return answer;
}

const str = "StuDy";
console.log(solution(str));
