function solution(arr) {
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        for (let x = 0; x < 4; x++) {
          let nx = i + dx[x];
          let ny = j + dy[x];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] !== 1) {
            arr[nx][ny] = "*";
          }
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = "f";
      }
    }
  }
  console.log(arr);
}

const arr = [
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
solution(arr);
