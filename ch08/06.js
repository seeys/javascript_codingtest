function solution(c, arr) {
  const len = arr.length;
  let max_weight = [];
  let answer = Number.MIN_SAFE_INTEGER;
  const DFS = (l, sum) => {
    if (l === len) {
      if (sum <= c) {
        //max_weight.push(sum);
        answer = Math.max(answer, sum);
      }
      return;
    } else {
      DFS(l + 1, sum + arr[l]);
      DFS(l + 1, sum);
    }
  };

  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
