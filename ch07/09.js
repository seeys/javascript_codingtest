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

function solution2(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let t_line = [];
  for (let x of arr) {
    t_line.push([x[0], "s"]);
    t_line.push([x[1], "e"]);
  }
  t_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of t_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
}

let arr = [
  [17, 28],
  [6, 30],
  [1, 27],
  [19, 38],
  [4, 46],
  [23, 30],
  [35, 43],
  [26, 45],
  [21, 31],
  [11, 44],
];
console.log(solution(arr));
