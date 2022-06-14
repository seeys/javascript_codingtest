function solution(target, arr) {
  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    m = parseInt((start + end) / 2);
    if (arr[m] === target) return m + 1;
    else if (arr[m] < target) start = m + 1;
    else end = m - 1;
  }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
