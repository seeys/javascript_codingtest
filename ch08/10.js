function solution(m, arr) {
  let answer = [];
  let num = Array.from({ length: m }, () => 0);
  const len = arr.length;

  let checked = Array.from({ length: len }, () => 0);
  const DFS = (l) => {
    if (l === m) {
      answer.push(num.slice());
      return;
    } else {
      for (let i = 0; i < len; i++) {
        if (!checked[i]) {
          num[l] = arr[i];
          checked[i] = 1;
          DFS(l + 1);
          checked[i] = 0;
        }
      }
    }
  };
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
