function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  const DFS = (l, time, score) => {
    if (time > m) return;
    if (l === n) {
      answer = Math.max(answer, score);
    } else {
      DFS(l + 1, time + pt[l], score + ps[l]);
      DFS(l + 1, time, score);
    }
  };
  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
