function solution(x) {
  let answer = "";
  for (let i = 0; i < x.length; i++) {
    if (x.charCodeAt(i) >= 65 && x.charCodeAt(i) <= 90)
      answer += x[i].toLowerCase();
    else answer += x[i].toUpperCase();
  }
  return answer;
}

const str = "StuDy";
console.log(solution(str));
