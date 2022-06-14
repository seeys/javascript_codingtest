function solution(a, b) {
  let answer = "YES";
  let aH = new Map();
  let bH = new Map();
  for (let x of a) {
    if (aH.has(x)) aH.set(x, aH.get(x) + 1);
    else aH.set(x, 1);
  }
  for (let x of b) {
    if (bH.has(x)) bH.set(x, bH.get(x) + 1);
    else bH.set(x, 1);
  }

  console.log(aH, bH);
  for (let [key, val] of aH) {
    if (val != bH.get(key)) return "NO";
  }
  return answer;
}

let a = "AbaeCe";
let b = "baeeACA";
console.log(solution(a, b));
