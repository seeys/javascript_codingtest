function solution(m, product) {
  let len = product.length;
  let res = 0;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < len; i++) {
    let price = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < len; j++) {
      if (i !== j) {
        if (product[j][0] + product[j][1] <= price) {
          price -= product[j][0] + product[j][1];
          cnt++;
        } else {
          break;
        }
      }
    }
    res = Math.max(res, cnt);
  }
  return res;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
