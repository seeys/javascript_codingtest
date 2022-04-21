function solution(str) {
  let answer = 0;
  let stack = [];
  for (let x of str) {
    if (x === "+") {
      answer = stack.pop() + stack.pop();
      stack.push(answer);
    } else if (x === "-") {
      let x = stack[stack.length - 1];
      let y = stack[stack.length - 2];
      answer = y - x;
      stack.pop();
      stack.pop();
      stack.push(answer);
    } else if (x === "/") {
      let x = stack[stack.length - 1];
      let y = stack[stack.length - 2];
      answer = y / x;
      stack.pop();
      stack.pop();
      stack.push(answer);
    } else if (x === "*") {
      answer = stack.pop() * stack.pop();
      stack.push(answer);
    } else {
      stack.push(parseInt(x));
    }
    console.log(stack);
  }
  return answer;
}

const str = "352+*9-";
console.log(solution(str));
