function solution(str) {
  let s = [];
  for (let x of str) {
    if (x === ")") {
      while (s.pop() !== "(");
    } else s.push(x);
  }
  return s;
}

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

console.log(solution(str));
