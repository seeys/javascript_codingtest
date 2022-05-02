function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let len = arr.length;
  let start = 0;
  let end = len - 1;
  let mid;
  while (end >= 0) {
    mid = parseInt((start + end) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
