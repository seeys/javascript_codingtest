function solution(s, e) {
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let q = [s];
  ch[s] = 1;
  dis[s] = 0;
  while (q.length) {
    let v = q.shift();
    for (let nv of [v - 1, v + 1, v + 5]) {
      if (nv === e) return dis[v] + 1;
      if (nv > 0 && nv <= 10000 && ch[nv] === 0) {
        ch[nv] = 1;
        q.push(nv);
        dis[nv] = dis[v] + 1;
      }
    }
  }
}

console.log(solution(8, 3));
