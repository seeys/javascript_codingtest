function solution(n) {
  let answer = [];
  let checked = Array.from({ length: n }, () => 0);

  const DFS = (v) => {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (checked[i]) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      checked[v] = 1;
      DFS(v + 1);
      checked[v] = 0;
      DFS(v + 1);
    }
  };

  DFS(1);
  return answer;
}

console.log(solution(3));
