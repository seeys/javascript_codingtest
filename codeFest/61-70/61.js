function solution(str) {
  let answer = "";
  let wH = new Map();
  for (let x of str) {
    if (wH.get(x)) wH.set(x, wH.get(x) + 1);
    else wH.set(x, 1);
  }

  for (const [key, value] of wH) {
    answer += key + value;
  }
  console.log(answer);
}

solution("aaabbbbcdddd");
