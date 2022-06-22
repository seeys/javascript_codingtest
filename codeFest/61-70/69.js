function solution(n) {
  let prime = [];
  let isPrime = true;
  for (let i = 2; i < 100; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime) prime.push(i);
    isPrime = true;
  }

  let answer = [];
  for (let x of prime) {
    if (prime.includes(n - x) && x <= n - x) {
      answer.push([x, n - x]);
    }
  }
  console.log(answer);
  let dis = answer.map((e) => e[1] - e[0]);
  let min = answer[dis.indexOf(Math.min(...dis))];
  let max = answer[dis.indexOf(Math.max(...dis))];
  console.log(dis, min, max);
}

solution(88);
