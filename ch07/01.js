function solution(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    if (i !== min_idx) {
      let tmp = arr[i];
      arr[i] = arr[min_idx];
      arr[min_idx] = tmp;
    }
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
