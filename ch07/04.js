function solution(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let key = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > key) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = key;
  }
  return arr;
}
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
