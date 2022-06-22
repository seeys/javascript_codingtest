function solution(str) {
  let stack = [];
  for (let x of str) {
    if (x === "(") stack.push(x);
    else {
      if (str.length > 0) stack.pop();
    }
  }
  if (str.length > 0) return "NO";
  else return "YES";
}

console.log(solution("()())"));
