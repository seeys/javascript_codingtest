function solution(arr) {
  let a = [];
  let b = [];
  for (let x of arr) {
    if (x < 0) a.push(x);
    else b.push(x);
  }
  return [...a, ...b];
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
