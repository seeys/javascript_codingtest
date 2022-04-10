function solution(x) {
  let answer;
  let len = x.length;
  let two = parseInt(len / 2);
  if (len % 2 == 0) {
    answer = x[two - 1].concat(x[two]);
  } else {
    answer = x[two];
  }
  // x.substring(two, two+1); two에서 two+1전까지 x.substr(two,1)
  // x.substring(two-1,two+1); x.substr(two-1,2)
  // x.substr(2,4); 2번 인덱스부터 4개를 뽑아냄
  return answer;
}

const str = "good";
console.log(solution(str));
