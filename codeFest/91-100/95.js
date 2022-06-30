function solution(stmp, k) {
  let n = stmp.length;
  let rotate = Array.from(Array(n), () => new Array(n).fill(0));
  let result = Array.from(Array(n), () => new Array(n).fill(0));
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        rotate[k][n - j - 1] = stmp[j][k];
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = stmp[i][j] + rotate[i][j];
    }
  }
  console.log(rotate);
  return result;
}

const stmp = [
  [1, 1, 1, 2],
  [2, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];

console.log(solution(stmp, 1));
