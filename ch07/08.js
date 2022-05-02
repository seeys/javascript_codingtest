function solution(arr) {
  let len = arr.length;
  let answer = 0;
  let et = 0;
  arr.sort((x, y) => {
    if (x[1] === y[1]) {
      return x[0] - y[0];
    }
    return x[1] - y[1];
  });
  console.log(arr);
  for (let i = 0; i < len; i++) {
    if (et <= arr[i][0]) {
      answer++;
      et = arr[i][1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr1 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
