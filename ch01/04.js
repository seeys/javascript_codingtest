function solution(a) {
  let answer = 0;
  let i = 1;
  do {
    answer += i;
    i++;
  } while (i <= a);
  return answer;
}

console.log(solution(6));
console.log(solution(10));
