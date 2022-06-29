function math(e) {
  let stack = [];
  for (let x of e) {
    if (x === "(" || x === "{") {
      stack.push(x);
    } else if (x === ")" || x === "}") {
      if (stack.length === 0) return "False";
      else {
        if (x === ")") {
          if (stack[stack.length - 1] === "(") stack.pop();
          else return "False";
        } else {
          if (stack[stack.length - 1] === "{") stack.pop();
          else return "False";
        }
      }
    }
  }
  console.log(stack);
  if (stack.length > 0) return "False";
  else return "True";
}

console.log(math("5 + 7){ * (3 * 5)"));
