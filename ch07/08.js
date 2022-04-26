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
  let start = 0;
  let end = 0;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
