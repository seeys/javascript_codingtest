function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let len = arr.length;
  let total = arr.reduce((a, b) => a + b, 0);
  const DFS = (idx, sum) => {
    if (flag) return;
    if (idx === len) {
      if (sum === total - sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(idx + 1, sum + arr[idx]);
      DFS(idx + 1, sum);
    }
  };

  DFS(0, 0);
  return answer;
}

const arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
