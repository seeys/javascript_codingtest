function solution(c, arr) {
  arr.sort((a, b) => a - b);
  let start = 1; // 최소거리
  let end = arr[arr.length - 1];
  let answer = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (count(mid, arr) >= mid) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}
function count(m, arr) {
  let cnt = 1;
  let end = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i + 1] - end >= m) {
      cnt++;
      end = arr[i];
    }
  }
  return cnt;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
