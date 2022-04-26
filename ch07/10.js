function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let len = arr.length;
  let start = 0;
  let mid = Math.floor(len / 2);
  let end = len - 1;
  while (end >= 0) {
    if (arr[mid] === target) {
      answer = mid;
      break;
    } else if (arr[mid] <= target) start = mid + 1;
    else end = mid - 1;
    mid = Math.floor((start + end) / 2);
  }
  return answer + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
