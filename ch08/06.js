function solution(c, arr) {
  let answer = [];
  let n = arr.length;
  const DFS = (l, sum) => {
    if (l === n) {
      if (sum < c) {
        answer.push(sum);
      }
    } else {
      DFS(l + 1, sum + arr[l]);
      DFS(l + 1, sum);
    }
  };
  DFS(0, 0);
  return Math.max(...answer);
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
