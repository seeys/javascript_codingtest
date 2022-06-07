function solution(a) {
  let res = parseInt(a / 12);
  return a % 12 === 0 ? res : res + 1;
}

console.log(solution(25));
console.log(solution(178));
