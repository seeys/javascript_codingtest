function solution(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  while (arr.length > 2) {
    arr.shift();
    arr.push(arr.shift());
    arr.push(arr.shift());
  }
  return arr;
}

console.log(solution(7, 3));
