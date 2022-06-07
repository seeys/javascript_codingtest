function solution(str) {
  let set = new Set();
  str.split("").forEach((v) => set.add(v));
  set = Array.from(set);
  let answer = "";
  for (let x of set) {
    let cnt = 0;
    for (let c of str) {
      if (c === x) cnt++;
    }
    if (cnt === 1) answer += x;
    else answer += x + String(cnt);
  }
  return answer;
}

const str = "KKHSSSSSSSE";
console.log(solution(str));
