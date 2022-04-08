function solution(arr) {
  let len = arr.length;
  let max_n = [];
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < len; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < len; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
  }
  max_n.push(sum1);
  max_n.push(sum2);
  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < len; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][len - i - 1];
  }
  max_n.push(sum1);
  max_n.push(sum2);
  let answer = Math.max(...max_n);
  console.log(max_n);
  return answer;
}
let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
