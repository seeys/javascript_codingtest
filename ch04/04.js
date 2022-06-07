function solution(m, product) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let cnt = 1;
    let money = m - (product[i][0] / 2 + product[i][1]);
    for (let j = 0; j < n; j++) {
      if (product[j][0] + product[j][1] > money) break;
      if (i !== j && product[j][0] + product[j][1] <= money) {
        money = money - (product[j][0] + product[j][1]);
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
