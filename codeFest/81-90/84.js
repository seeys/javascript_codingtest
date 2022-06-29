function solution(num, k) {
  let arr = [];
  num = String(num).split("");

  let n = num.length;
  let tmp = Array.from({ length: k }, () => 0);
  let ch = Array.from({ length: n }, () => 0);
  // 순열
  const dfs = (l) => {
    if (l === k) {
      arr.push(parseInt(tmp.join("")));
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[l] = num[i];
          dfs(l + 1);
          ch[i] = 0;
        }
      }
    }
  };
  // 조합
  const dfs1 = (l, s) => {
    if (l === k) {
      arr.push(parseInt(tmp.join("")));
    } else {
      for (let i = s; i < n; i++) {
        tmp[l] = num[i];
        dfs1(l + 1, i + 1);
      }
    }
  };
  //dfs(0);
  dfs1(0, 0);
  return Math.max(...arr);
}

// 문제만 읽어보면 순열인데 예시는 조합으로 되어있음..
console.log(solution(1723, 2));
