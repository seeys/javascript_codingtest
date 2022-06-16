function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (l, sum) => {
    if (sum > m || l >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, l);
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        dfs(l + 1, sum + arr[i]);
      }
    }
  };

  dfs(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
