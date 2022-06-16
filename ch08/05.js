function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let sum = arr.reduce((a, b) => a + b, 0);
  const DFS = (v, s) => {
    if (s === sum - s) {
      answer = "YES";
      flag = 1;
      return;
    }
    if (v === arr.length || flag) return;
    else {
      DFS(v + 1, s + arr[v]);
      DFS(v + 1, s);
    }
  };
  DFS(0, 0);
  return answer;
}

const arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
