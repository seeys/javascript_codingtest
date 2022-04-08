function solution(str) {
  let answer = 0;
  for (let i of str) {
    if (/[A-Z\W]/.test(i)) {
      answer++;
    }
  }
  return answer;
}

const str = "KoreaTimeGood";
console.log(solution(str));
