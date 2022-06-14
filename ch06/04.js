function solution(str) {
  let s = [];
  let answer = 0;
  for (let x of str) {
    if (x === "+") {
      s.push(s.pop() + s.pop());
    } else if (x === "-") {
      let x = s.pop();
      let y = s.pop();
      s.push(y - x);
    } else if (x === "*") {
      s.push(s.pop() * s.pop());
    } else if (x === "/") {
      let x = s.pop();
      let y = s.pop();
      s.push(y / x);
    } else {
      s.push(parseInt(x));
    }
  }
  return s;
}

const str = "352+*9-";
console.log(solution(str));
