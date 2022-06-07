function solution(arr) {
  let score = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) score[i]++;
    }
  }
  console.log(score);
}

const arr = [87, 89, 92, 100, 76];
solution(arr);
