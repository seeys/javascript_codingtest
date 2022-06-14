function solution(str) {
  let s = [];
  for (let x of str) {
    if (x === "(") s.push(x);
    else {
      if (s.length > 0) s.pop();
    }
  }
  if (s.length > 0) return "NO";
  else return "YES";
}

const arr = "()()";
const arr1 = "(()(()))(()";
console.log(solution(arr));
console.log(solution(arr1));
