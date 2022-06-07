function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1 && arr[i - 1] >= 1) arr[i] = arr[i - 1] + 1;
  }
  return arr.reduce((a, b) => a + b, 0);
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
