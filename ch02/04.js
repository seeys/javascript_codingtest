function solution(arr) {
  let cnt = 0;
  let len = arr.length;
  let score = [];
  if (arr[0] == 1) {
    score.push(1);
  }
  for (let i = 1; i < len; i++) {
    if (arr[i] == 1 && arr[i - 1] == 1) {
      cnt++;
    } else if (arr[i] == 1 && arr[i - 1] == 0) {
      cnt = 1;
    } else if (arr[i] == 0) {
      cnt = 0;
    }

    score.push(cnt);
  }
  const answer = score.reduce((a, b) => a + b, 0);
  console.log(score);
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
