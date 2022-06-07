function solution(arr) {
  let max = arr[0];
  let cnt = 1;
  for (let x of arr) {
    if (max < x) {
      cnt++;
      max = x;
    }
  }
  return cnt;
}

const arr = [136, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
