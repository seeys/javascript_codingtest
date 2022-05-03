function solution(n) {
  let answer;
  const DFS = (v) => {
    if (v === 1) return 1;
    else return v * DFS(v - 1);
  };
  answer = DFS(n);
  return answer;
}

console.log(solution(5));
