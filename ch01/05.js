function solution(arr) {
  let answer;
  answer = Math.min(...arr);
  return answer;
}
let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
