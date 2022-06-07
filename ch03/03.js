function solution(str) {
  let answer = "";
  for (let x of str) {
    if (Number.isInteger(parseInt(x))) answer += x;
  }
  return parseInt(answer);
}

const str = "g0en2T0s8eSof";
console.log(solution(str));
