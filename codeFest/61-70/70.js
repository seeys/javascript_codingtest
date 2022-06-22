const cal = (a, b) => {
  let answer = [];
  let len = a.length;
  for (let i = 0; i < len; i++) {
    let row = [];
    for (let j = 0; j < len; j++) {
      let x = 0;
      for (let k = 0; k < len; k++) {
        x += a[i][k] * b[k][j];
      }
      row.push(x);
    }
    answer.push(row);
  }
  console.log(answer);
};

function solution() {
  const a = [
    [1, 2],
    [2, 4],
  ];
  const b = [
    [1, 0],
    [0, 3],
  ];
  let n = a.length;
  let m = b[0].length;
  if (n === m) cal(a, b);
  else console.log(-1);
}

solution();
