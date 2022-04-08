function solution(x, arr) {
  const answer = arr.filter((i) => i >= x);
  return answer;
}

const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(6, arr));
