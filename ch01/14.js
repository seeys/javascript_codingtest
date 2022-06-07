function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = "";
  for (let x of arr) {
    if (max < x.length) {
      answer = x;
      max = Math.max(max, x.length);
    }
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
