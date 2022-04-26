function solution(arr) {
  let n = [];
  let p = [];
  for (let x of arr) {
    if (x < 0) {
      n.push(x);
    } else {
      p.push(x);
    }
  }
  let answer = [...n, ...p];
  return answer;
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
