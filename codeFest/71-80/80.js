function solution(arr, n) {
  let answer = [];
  let word = Array.from({ length: n }, () => "0");
  const dfs = (l, s) => {
    if (l === n) {
      answer.push(word.join(""));
      return;
    } else {
      for (let i = s; i < arr.length; i++) {
        word[l] = arr[i];
        dfs(l + 1, i + 1);
      }
    }
  };
  dfs(0, 0);
  return answer;
}

const arr = ["ㄱ", "ㄴ", "ㄷ", "ㄹ"];
console.log(solution(arr, 3));
