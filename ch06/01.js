function solution(arr) {
  let stack = [];
  for (let x of arr) {
    if (x === "(") {
      stack.push(x);
    } else {
      stack.pop();
    }
  }
  if (stack.length === 0) return "YES";
  else return "NO";
}

const arr = "()()";
const arr1 = "(()(()))(()";
console.log(solution(arr));
console.log(solution(arr1));
