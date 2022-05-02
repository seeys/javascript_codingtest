function count(arr, capacity) {
  let cnt = 1;
  let ep = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= capacity) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
}

function solution(c, arr) {
  let answer;
  let lt = 1;
  arr.sort((a, b) => a - b);
  let rt = arr[arr.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
