function solution(m, ps, pt) {
  let answer = [];
  let n = ps.length;
  let score = 0;
  const DFS = (l, time, score) => {
    if (l === n) {
      if (time <= m) {
        answer.push(score);
        return;
      }
    } else {
      DFS(l + 1, time + pt[l], score + ps[l]);
      DFS(l + 1, time, score);
    }
  };
  DFS(0, 0, 0);
  return Math.max(...answer);
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
