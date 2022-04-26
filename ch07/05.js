function solution(n, arr) {
  let answer = Array.from({ length: n }, () => 0);
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (answer.includes(arr[i])) {
      let idx = answer.indexOf(arr[i]);
      let key = answer[idx];
      while (idx > 0) {
        answer[idx] = answer[idx - 1];
        idx--;
      }
      answer[idx] = key;
    } else {
      answer.unshift(arr[i]);
      while (answer.length !== n) {
        answer.pop();
      }
    }
    console.log(answer);
  }
  return answer;
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
