function solution(med, k) {
  let answer = [];
  const setA = new Set(med);
  for (let i of total_med) {
    let data = new Set(i);
    const inter = new Set([...setA].filter((x) => data.has(x)));
    if (inter.size === k) {
      answer.push(i);
    }
  }
}
