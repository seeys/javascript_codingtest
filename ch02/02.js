function solution(arr) {
  const len = arr.length;
  let max_h = 0;
  let answer = 0;
  for (let i of arr) {
    if (i > max_h) {
      max_h = i;
      answer++;
    }
  }
  return answer;
}

const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
