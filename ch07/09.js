function solution(arr) {
  let len = arr.length;
  let answer = [];
  arr.sort((x, y) => {
    if (x[0] === y[0]) {
      return x[1] - y[1];
    }
    return x[0] - y[0];
  });
  console.log(arr);
  for (let i = 0; i < len - 1; i++) {
    let cnt = 1;
    for (let j = i + 1; j < len; j++) {
      if (arr[i][1] > arr[j][0] && arr[i][0] < arr[j][0]) {
        cnt++;
      }
    }
    answer.push(cnt);
  }
  return Math.max(...answer);
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
