function solution(arr) {
  let n = arr.length;
  let idx = 0;
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < n; j++) {
      if (min > arr[j]) {
        min = arr[j];
        idx = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[idx];
    arr[idx] = tmp;
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
