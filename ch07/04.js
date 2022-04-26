function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let insert_idx = i - 1;
    while (insert_idx >= 0 && arr[insert_idx] > key) {
      arr[insert_idx + 1] = arr[insert_idx];
      arr[insert_idx] = key;
      key = arr[insert_idx];
      insert_idx--;
    }
  }
  return arr;
}
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
