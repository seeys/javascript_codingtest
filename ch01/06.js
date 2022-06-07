function solution(arr) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 !== 0) {
      sum += x;
      min = Math.min(min, x);
    }
  }
  console.log(sum, min);
}

const arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);
