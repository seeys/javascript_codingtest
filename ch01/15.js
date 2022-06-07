function solution(x) {
  let answer = "";
  let len = x.length;
  let idx = parseInt(len / 2);
  if (len % 2 === 0) {
    answer = x[idx - 1] + x[idx];
  } else {
    answer = x[idx];
  }
  return answer;
}

const str = "good";
console.log(solution(str));
