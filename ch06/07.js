function solution(a, b) {
  let queue = [];
  for (let x of b) {
    queue.push(x);
  }
  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) queue.push(queue.shift());
    else queue.shift();
  }
  if (a === queue.join("")) return "YES";
  else return "NO";
}

const str = "CAB";
const str1 = "CBDAGE";

console.log(solution(str, str1));
