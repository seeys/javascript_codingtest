function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  const DFS = (v, sum) => {
    if (m < sum) return;
    if (v >= answer) return;
    //금액 같을때
    if (m === sum) {
      answer = Math.min(answer, v);
      console.log(v, sum);
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(v + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
