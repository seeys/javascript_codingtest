function solution(str) {
  let answer;
  answer = str.match(/[0-9]+/g).join("");
  return parseInt(answer);
}
function solution2(str) {
  let answer = [];
  for (let x of str) {
    if (!isNaN(x)) answer += x; // answer = asnwer*10 + Number(x) answer가 정수로 초기화했을때
  }
  return parseInt(answer);
}
const str = "g0en2T0s8eSof";
console.log(solution(str));
