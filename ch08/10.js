function solution(m, arr) {
  let answer = [];
  let cnt = 0;
  let res = Array.from({ length: m }, () => 0);
  let visited = Array.from({ length: arr.length }, () => 0);
  const DFS = (v) => {
    if (v === m) {
      answer.push(res.slice());
      cnt++;
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          res[v] = arr[i];
          DFS(v + 1);
          visited[i] = 0;
        }
      }
    }
  };
  DFS(0);
  answer.push(cnt);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
