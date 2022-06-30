function solution(str) {
  let result = new Set();
  str = str.split(" ");
  let num = [];
  let n = str.length;
  for (let i = 0; i < n; i++) {
    if (!str[i].match("번")) {
      num.push(str[i]);
    }
  }
  for (let x of num) {
    x = x.split(",");
    for (let y of x) {
      result.add(y);
    }
  }
  console.log(result);
  return Array(...result);
}

console.log(solution("1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3"));
