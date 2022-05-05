function solution(s, e) {
  let answer = 0;
  let checked = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];

  queue.push(s);

  checked[s] = 1;
  dis[s] = 0;
  while (queue.length) {
    let v = queue.shift();
    answer++;
    for (let nv of [v - 1, v + 1, v + 5]) {
      if (nv === e) return dis[v] + 1;
      if (nv > 0 && nv <= 10000 && checked[nv] === 0) {
        checked[nv] = 1;
        queue.push(nv);
        dis[nv] = dis[v] + 1;
      }
    }
  }
  return answer;
}

console.log(solution(8, 3));
