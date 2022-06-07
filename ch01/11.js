function solution(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) cnt += 1;
  }
  return cnt;
}

const str = "KoreaTimeGood";
console.log(solution(str));
