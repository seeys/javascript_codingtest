function solution() {
  let q = [1];
  let answer = "";
  while (q.length) {
    let v = q.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      q.push(nv);
    }
  }
  return answer;
}

console.log(solution());
