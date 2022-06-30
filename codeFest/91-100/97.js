function solution(n, l) {
  let answer = 0;
  let peo = Array.from({ length: n }, () => 0);

  while (l.length) {
    for (let i = 0; i < peo.length; i++) {
      if (peo[i] === 0 && l) {
        peo[i] += l.shift();
      }
    }
    peo = peo.map((x) => (x = x - 1));
    answer += 1;
  }
  answer += Math.max(...peo);
  return answer;
}

const people = 3;
const time = [1, 2, 1, 3, 3, 3];

console.log(solution(people, time));
// 출력값 = 5
