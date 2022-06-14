function solution(n, arr) {
  let cache = Array.from({ length: n }, () => 0);
  for (let x of arr) {
    if (cache.includes(x)) {
      let idx = cache.indexOf(x);
      let val = cache[idx];
      while (idx > 0) {
        cache[idx] = cache[idx - 1];
        idx--;
      }
      cache[idx] = val;
    } else {
      cache.unshift(x);
      if (cache.length > n) cache.pop();
    }
  }
  return cache;
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
