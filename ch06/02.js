function solution(str) {
  let stack = [];
  for (let x of str) {
    if (x === "(" || x !== ")") {
      stack.push(x);
    } else {
      while (stack[stack.length - 1] !== "(") {
        stack.pop();
      }
      stack.pop();
    }
  }
  return stack;
}

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

console.log(solution(str));
