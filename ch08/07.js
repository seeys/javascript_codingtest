function solution(m, ps, pt) {
  const len = ps.length;

  let answer = Number.MIN_SAFE_INTEGER;
  const DFS = (l, sum, time) => {
    if (l === len) {
      if (time <= m) {
        //max_weight.push(sum);
        answer = Math.max(answer, sum);
      }
      return;
    } else {
      DFS(l + 1, sum + ps[l], time + pt[l]);
      DFS(l + 1, sum, time);
    }
  };

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
