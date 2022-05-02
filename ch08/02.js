function solution(n) {
  if (n === 0) return;
  else {
    solution(parseInt(n / 2));
    console.log(n % 2);
  }
}

solution(11);
