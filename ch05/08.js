function solution(s, t) {
  let tH = new Map();
  for (let x of a) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let lt = 0;
  let rt = t.length - 1;
}

let a = "bacaAacba";
let b = "abc";

console.log(solution(a, b));
