function solution(str) {
  let answer;
  answer = str.match(/[0-9]+/g).join("");
  return parseInt(answer);
}

const str = "g0en2T0s8eSof";
console.log(solution(str));
