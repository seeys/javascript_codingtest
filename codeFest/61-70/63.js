function solution(str) {
  let answer = "";
  let arr = str.split(" ");
  for (let x of arr) {
    answer += x[0];
  }
  console.log(answer);
}

solution("복잡한 세상 편하게 살자");
