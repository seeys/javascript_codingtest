function solution(arr) {
  let answer = 0;
  const len = arr.length;
  let res = Array.from(Array(len + 2), () => Array(len + 2).fill(0));

  for (let i = 1; i < len + 1; i++) {
    for (let j = 1; j < len + 1; j++) {
      res[i][j] = arr[i - 1][j - 1];
    }
  }
  for (let i = 1; i < len + 1; i++) {
    for (let j = 1; j < len + 1; j++) {
      if (
        res[i][j] > res[i][j - 1] &&
        res[i][j] > res[i][j + 1] &&
        res[i][j] > res[i - 1][j] &&
        res[i][j] > res[i + 1][j]
      )
        answer++;
    }
  }
  console.log(res);
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));
