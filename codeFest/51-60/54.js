function solution(arr) {
  let answer = "YES";
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return "NO";
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 1, 2, 6, 3]));
