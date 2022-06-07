function solution(str) {
  let arr = [];
  str.split("").filter((v) => {
    if (!arr.includes(v)) arr.push(v);
  });
  return arr.join("");
}

const str = "ksekkset";
console.log(solution(str));
