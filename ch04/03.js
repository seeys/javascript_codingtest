function solution(arr) {
  let answer = 0;
  let stu_n = arr[0].length;
  let test = arr.length;
  let isTrue = true;
  for (let i = 1; i < stu_n + 1; i++) {
    for (let j = 1; j < stu_n + 1; j++) {
      if (i !== j) {
        for (let k = 0; k < test; k++) {
          if (arr[k].indexOf(i) > arr[k].indexOf(j)) {
            console.log(arr[k].indexOf(i), arr[k].indexOf(j));
            isTrue = true;
          } else {
            isTrue = false;
            break;
          }
        }
        if (isTrue) answer++;
      }
    }
  }
  return answer;
}
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
