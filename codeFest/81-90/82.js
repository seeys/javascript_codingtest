function math(e) {
  let stack = [];
  for (let x of e) {
    if (x === "(") {
      stack.push(x);
    } else if (x === ")") {
      if (stack.length === 0) return "False";
      stack.pop();
    }
  }
  console.log(stack);
  if (stack.length > 0) return "False";
  else return "True";
}

console.log(math("5 + 7) * (3 * 5)"));
