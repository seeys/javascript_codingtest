function solution(n, a) {
  let answer = 0;
  let max_price = Number.MIN_SAFE_INTEGER;
  let len = a.length;
  for (let i = 0; i < len - 2; i++) {
    answer = a[i] + a[i + 1] + a[i + 2];
    max_price = Math.max(max_price, answer);
  }
  return max_price;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
