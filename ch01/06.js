function solution(arr) {
  let answer = [];
  let sum = 0;
  for (let i of arr) {
    if (i % 2 != 0) {
      answer.push(i);
      sum += i;
    }
  }
  console.log(sum);
  console.log(Math.min(...answer));
}

const arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);
