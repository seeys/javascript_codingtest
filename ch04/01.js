function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let tmp = 0; // 자릿수를 저장할 임시변수
    while (x > 0) {
      tmp += x % 10;
      x = parseInt(x / 10);
    }
    answer.push(tmp);
  }
  let max_value = Number.MIN_SAFE_INTEGER;
  let max_idx_arr = []; // 최대값을 갖는 arr 변수를 저장
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] >= max_value) {
      max_value = answer[i];
      max_idx_arr.push(arr[i]);
    }
  }
  console.log(max_idx_arr);
  return Math.max(...max_idx_arr);
}

const arr = [128, 460, 65, 40, 521, 137, 123];
console.log(solution(arr));
