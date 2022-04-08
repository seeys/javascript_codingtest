function solution(x) {
  let answer;
  let len = x.length;
  let two = parseInt(len / 2);
  if (len % 2 == 0) {
    answer = x[two - 1].concat(x[two]);
  } else {
    answer = x[two];
  }
  return answer;
}

const str = "good";
console.log(solution(str));
