function solution(arr) {
  let max = [];
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let k = arr[i];
    while (k > 0) {
      sum += k % 10;
      k = parseInt(k / 10);
    }
    max.push(sum);
  }
  let findMax = Math.max(...max);
  for (let i = 0; i < max.length; i++) {
    if (max[i] === findMax) {
      res = Math.max(arr[i], res);
    }
  }
  return res;
}

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
