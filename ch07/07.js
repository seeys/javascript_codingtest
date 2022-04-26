function solution(arr) {
  let answer;
  arr.sort((x, y) => {
    if (x[0] === y[0]) {
      return x[1] - y[1];
    }
    return x[0] - y[0];
  });
  return arr;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
