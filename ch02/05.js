function solution(arr) {
  let len = arr.length;
  let score = Array.from({ length: len }, () => 1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i] < arr[j]) {
        score[i]++;
      }
    }
  }
  console.log(score);
}

const arr = [87, 89, 92, 100, 76];
solution(arr);
