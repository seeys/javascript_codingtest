function solution(arr) {
  //return Math.min(...arr);
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (answer > arr[i]) {
      answer = arr[i];
    }
  }
  return answer;
}
let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
